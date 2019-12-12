# 官方GITHUB

    安装windows环境的git软件

git clone ****** github地址 *****
# 内部GITLAB

    安装windows环境的git软件
    安装TortoiseGit
    可以安装一个汉化包到官网找ZH
    git clone ****** gitlab地址 *****   这个地址需要使用http地址

## 整理使用的git命令
    查看git的帮助
    git help

    查看当前git状态
    git status

    查看当前本地使用分支
    git branch
    
    创建或选择分支
    git branch 分支名称
    
    切换本地分支
    git checkout -分支名称

    查看当前远程使用分支
    git branch -r

    查看当前本地关联的远程分支
    git branch -vv
    
    推送本地新建分支到远程仓库
    git push --set-upstream origin backup

    克隆指定分支代码
    git clone -b xxx分支名xxx xxx克隆地址

    本地创建并切换到新分支dev
    git checkout  -b dev origin/dev
    
    更改当前默认master分支为dev分支
    git branch --set-upstream-to=origin/dev master

    取消当前更改
    git checkout xxx.vue具体文件路径

    暂存当前更改的所有文件
    git add */.

    提交所有暂存的文件
    git commit -m"为当前提交添加备注"

    更新相应远程分支至本地仓库
    git pull origin master/其他分支名

    推送本地更改至远程仓库指定分支
    git push origin master/其他分支名

    还原文件已修改
    git checkout 文件路径
