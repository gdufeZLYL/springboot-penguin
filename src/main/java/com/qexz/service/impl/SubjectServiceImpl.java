package com.qexz.service.impl;

import com.github.pagehelper.PageHelper;
import com.qexz.common.QexzConst;
import com.qexz.controller.DefaultController;
import com.qexz.dao.SubjectMapper;
import com.qexz.model.Subject;
import com.qexz.service.SubjectService;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("subjectService")
public class SubjectServiceImpl implements SubjectService {

    private static Log LOG = LogFactory.getLog(SubjectServiceImpl.class);

    @Autowired
    private SubjectMapper subjectMapper;

    @Override
    public int addSubject(Subject subject) {
        if (subject != null && StringUtils.isEmpty(subject.getImgUrl())) {
            subject.setImgUrl(QexzConst.DEFAULT_SUBJECT_IMG_URL);
        }
        subject.setQuestionNum(0);
        return subjectMapper.insertSubject(subject);
    }

    @Override
    public boolean updateSubject(Subject subject) {
        return subjectMapper.updateSubjectById(subject) > 0;
    }

    @Override
    public Subject getSubjectById(int id) {
        return subjectMapper.getSubjectById(id);
    }

    @Override
    public Map<String, Object> getSubjects(int pageNum, int pageSize) {
        Map<String, Object> data = new HashMap<>();
        int count = subjectMapper.getCount();
        if (count == 0) {
            data.put("pageNum", 0);
            data.put("pageSize", 0);
            data.put("totalPageNum", 1);
            data.put("totalPageSize", 0);
            data.put("subjects", new ArrayList<>());
            return data;
        }
        int totalPageNum = count % pageSize == 0 ? count / pageSize : count / pageSize + 1;
        if (pageNum > totalPageNum) {
            data.put("pageNum", 0);
            data.put("pageSize", 0);
            data.put("totalPageNum", totalPageNum);
            data.put("totalPageSize", 0);
            data.put("subjects", new ArrayList<>());
            return data;
        }
        PageHelper.startPage(pageNum, pageSize);
        List<Subject> subjects = subjectMapper.getSubjects();
        data.put("pageNum", pageNum);
        data.put("pageSize", pageSize);
        data.put("totalPageNum", totalPageNum);
        data.put("totalPageSize", count);
        data.put("subjects", subjects);
        return data;
    }

    @Override
    public List<Subject> getSubjects() {
        return subjectMapper.getSubjects();
    }

    @Override
    public boolean deleteSubjectById(int id) {
        return subjectMapper.deleteSubjectById(id) > 0;
    }
}
