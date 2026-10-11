# AetherGrid Phase 3 - Local Helm Deployment Evidence

Cluster: aethergrid-local
Namespace: aethergrid-local
Release: aethergrid
Evidence collected: 2026-10-10 20:02:03 -07:00

## Helm Releases

NAME      	NAMESPACE       	REVISION	UPDATED                              	STATUS  	CHART           	APP VERSION
aethergrid	aethergrid-local	1       	2026-10-10 19:56:22.4423682 -0700 MST	deployed	aethergrid-0.1.0	1.16.0     

## Kubernetes Pods

NAME                        READY   STATUS    RESTARTS   AGE     IP           NODE                             NOMINATED NODE   READINESS GATES
aethergrid-57777467-wllf8   1/1     Running   0          5m40s   10.244.0.5   aethergrid-local-control-plane   <none>           <none>

## Kubernetes Deployments

NAME         READY   UP-TO-DATE   AVAILABLE   AGE
aethergrid   1/1     1            1           5m40s

## Scope

Local Kind/Helm deployment verified.
Production ArgoCD remediation not verified.
Production credential rotation not verified.
