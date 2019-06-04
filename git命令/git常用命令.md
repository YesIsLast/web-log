# 官方GITHUB

    安装windows环境的git软件

git clone ****** github地址 *****
# 中惠云创内部GITLAB

    安装windows环境的git软件
    安装TortoiseGit
    可以安装一个汉化包到官网找ZH
    git clone ****** gitlab地址 *****   这个地址需要使用http地址

## 整理使用的git命令
    查看git的帮助
    git help

    本地创建并切换到新分支dev
    git checkout  -b dev origin/dev
    
    更改当前默认master分支为dev分支
    git branch --set-upstream-to=origin/dev master

    查看当前git状态
    git status

    查看当前本地使用分支
    git branch

    查看当前远程使用分支
    git branch -r

    查看当前本地关联的远程分支
    git branch -vv