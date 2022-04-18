---
title: IndexWriter chapter 3
date: 2021-05-05 21:01:05
tags:
- Lucence IndexWriter
categories:
- Lucence Source Code
---

The series of IndexWriter documents will introduce how to construct a IndexWriter instance. There will be 3 parts ：

- set Directory
- set IndexWriterConfig
- call the Constructor of IndexWriter

In the IndexWriter class there has only one constructor like the following:

    public IndexWriter(Directory d, IndexWriterConfig conf) throws IOException {
        ... ...
    }

The d means directory and the conf is configuration.

# the flow graph of contructor of IndexWriter
