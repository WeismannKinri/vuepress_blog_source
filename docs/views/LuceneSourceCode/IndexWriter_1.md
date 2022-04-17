---
title: IndexWriter chapter 1
date: 2021-05-03 12:23:52
tags:
- Lucence IndexWriter
categories:
- Lucence Source Code
---

The series of IndexWriter documents will introduce how to construct a IndexWriter instance. There will be 3 parts ：

- set Directory
- set IndexWriterConfig
- call the Constructor of IndexWriter

# set index Directory for IndexWriter
Directory is used to maintain files in the directory for abstract function like creating, opening, reading, renaming and so on. The Directory will have multi level hierarchy, also don't have no sub-folder hierarchy, the detail will be introduced in the Directory series and will do introduce in here.

# set IndexWriterConfig for IndexWriter
Before call the constructor of the IndexWriter, we need to init IndexWriterConfig. There are 2 kinds of IndexWriterConfig:

- unmodifiable configuration: After init the IndexWriter, the configuration can not be changed
- modifiable configuration: After init the IndexWriter, the configuration can still be changed anytime

# Unmodifiable Configuration
There are a lot of unmodifiable configuration like: OpenMode, IndexDeletionPolicy, IndexCommit, Similarity, MergeScheduler, Codec, DocumentsWriterPerThreadPool, ReaderPooling, FlushPolicy, RAMPerThreadHardLimitMB, InfoStream, IndexSort, SoftDeletesField.

## OpenMode
The openMode describes at the init step of the IndexWriter, how to do with the existed lucene files. There are 3 kinds: CREATE, APPEND, CREATE_OR_APPEND.

- CREATE: if in the directory there have some old index(according to the Segmen_N file), the these old indexs will be overwrited
- APPEND: when open the directory it will read old index first and the old ones won't be deleted. By the way, when there is no index, an error will occur like the following:

    throw new IndexNotFoundException("no segments* file found in " + directory + ": files: " + Arrays.toString(files));

- CREATE_OR_APPEND: it will judge if there has old index, if it does then equals APPEND, else equals CREATE.

## IndexDeletionPolicy
IndexDeletionPolicy means, when a new committing happens, how to do with it and do deleting. It will be introduced in other documents.

## IndexCommit
After one committing, all the information about thiscommitting will be desctibed in IndexCommit. There are 2 parts: segment_N and Directory.

## Similarity
The similarity describes how to do scoring. The default algorithm is BM25.

## MergeScheduler
MergeScheduler define how to do mering lucene segments. The detail will be describes in the document MergeScheduler.

## Codec
The Codec define the data structure of index file. Codec can use IndexWriterConfig.setCodec(Codec codec) to set,in Lucene7.5.0 the default codec is Lucene70Codec.

## DocumentsWriterPerThreadPool
DocumentsWriterPerThreadPool is a logic thread pool. When a new file want to be added, one ThreadState will be gotten from DocumentsWriterPerThreadPool and do the adding.

## ReaderPooling
ReaderPooling is a boalean value that defines whether use SegmentReader. The pool can be regarded as cache. ReaderPooling can use IndexWriterConfig.setReaderPooling(boolean readerPooling) to set and the default value is true.

## FlushPolicy
The fulsh policy defines the auto flush policy. In lucene 7.5, there is only one policy named FlushByRamOrCountsPolicy.

## RAMPerThreadHardLimitMB
I describe it when introduce MaxBufferedDocs and RAMBufferSizeMB

## InfoStream
The InfoStream is used to output debug message. InfoStream can IndexWriterConfig.setInfoStream(InfoStream infoStream) to set. The default value is NoOutput.

## IndexSort
The IndexSort describes how to do sorting when indexing file in segments. IndexSort can use IndexWriterConfig.setIndexSort(Sort sort) to set and the default value is null.
## SoftDeletesField
It will be describes in other document.

# Modifiable Configuration
There are 7 kinds:

- MergePolicy
- MaxBufferedDocs
- RAMBufferSizeMB
- MergedSegmentWarmer
- UseCompoundFile
- CommitOnClose
- CheckPendingFlushUpdate
