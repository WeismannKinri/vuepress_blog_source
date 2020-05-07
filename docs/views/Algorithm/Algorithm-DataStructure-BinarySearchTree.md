---
title: Binary Search Tree
date: 2018-04-30 20:45:19
tags: 
- Algorithm
categories:
- Algorithm
---
## 1. Definition of Tree
Binary Search Tree is a binary tree with the following characters:

- If a node that its left subtree is not empty,then values of all the node in the left subtree must smaller than value of this node
- If a node that its right subtree is not empty,then values of all the node in the right subtree must bigger than value of this node
- Every left and right subtree is still a Binary Search Tree 
- No 2 nodes that their values equel to each other.

The time of searching are inserting is O(log n).

## 2. Search One Element in BST
The following GIF shows you how it searches

1. If b is a empty tree then searching fails
2. if x equals to root node of b then succees
3. if x is smaller than root node of b then go left subtree
4. else go right subtree 

![](./Algorithm-DataStructure-BinarySearchTree/1.gif) 

## 3. Build a BST From a Sorted Array
![](./Algorithm-DataStructure-BinarySearchTree/2.gif)

## 4. Insert Element Into BST

Insert a node s into a BST a will be like:

1. If b is an empty tree, then insert s as a root node
2. If s->data equals to b then return
3. If s->data is smaller then b then go left
4. else go right

![](./Algorithm-DataStructure-BinarySearchTree/3.gif) 

## 5. Turn BST Into a Sorted Array
![](./Algorithm-DataStructure-BinarySearchTree/4.gif)