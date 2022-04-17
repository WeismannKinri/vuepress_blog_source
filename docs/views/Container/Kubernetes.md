---
title: Kubernetes
date: 2021-02-02 11:23:52
tags:
- Container
categories:
- Container
---
# Introduction of Kubernetes
Kubernetes is an open source orchestration system for automating the management, placement, scaling and routing of containers that has become popular with developers and IT operations teams in recent years. If you once used Docker, you can treat docker as a low-level component of the kubernetes. Also, you can use Containerd or other container runtimes which can be called by CRI.

In fact, you can create a Kubernetes cluster through one file like the following:

    $ kubectl create -f single-config-file.yaml

The kubectl is used for connect with Kubernetes API. Now here is some core conception.


## Cluster
Cluster is a set of nodes which can be physical machine or virtual machine. The following picture shows it:

![](./kubernetes/1.png)

From the pictures we can get some components:

Pod
Container
Label(label)
Replication Controller
Service（enter image description here）
Node
Kubernetes Master

## Pod
Pods are the smallest deployable units of computing that you can create and manage in Kubernetes.

A Pod (as in a pod of whales or pea pod) is a group of one or more containers, with shared storage and network resources, and a specification for how to run the containers. A Pod's contents are always co-located and co-scheduled, and run in a shared context. In terms of Docker concepts, a Pod is similar to a group of Docker containers with shared namespaces and shared filesystem volumes.

## Lable
In the pictures, some pods have Label(enter image description here). A label is atteched to a pod as one key-value. The you can select the pods or services you want by labels.

## Replication Controller
Replication Controller can make sure there are enough replicated pod is running. here will show you how it works:

![](./kubernetes/2.gif)

Now we have enough pods, how can we do load-balance? Here what we need is the Service.

## Service
The Service is an abstract way to expose an application running on a set of Pods as a network service.If PodsWith Kubernetes you don't need to modify your application to use an unfamiliar service discovery mechanism. Kubernetes gives Pods their own IP addresses and a single DNS name for a set of Pods, and can load-balance across them. The flowing animation shows you how it works:

![](./kubernetes/3.gif)

## Node
Node is a physical machine or virtual machine as a kubernetes worker.Kubernetes runs your workload by placing containers into Pods to run on Nodes. A node may be a virtual or physical machine, depending on the cluster. Each node is managed by the control plane and contains the services necessary to run Pods.The components on a node include the kubelet, a container runtime, and the kube-proxy.

## Master
The Master make global decisions about the cluster, as well as detecting and responding to cluster events.