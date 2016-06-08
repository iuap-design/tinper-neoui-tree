# 树控件



## 1、介绍

树控件以z-tree为原型，主要处理了与datatable之间的关联。

## 2、快速上手
[控件使用说明](https://github.com/iuap-design/tree/blob/master/docs/tree.md)

## 3、开发说明

### 目录说明

```
├─css 控件css
├─dist 产出后的资源
├─docs 文档相关
├─examples 示例文件
    ├─datatable 关联datatable示例
	├─ui 单独控件示例
├─snippets 文档及代码片段
    ├─docs 文档片段
    │  ├─tree.md 文档片段:replaceui将替换为ui示例，replacedatatable将替换为datatable示例。
    └─examples 示例片段
        └─tree 与tree.md对应的目录,示例目录下必须存在widget.css,widget.html,widget.js,说明.txt
			└─datatable 关联datatable示例片段
			└─ui 单独控件示例片段
├─vendor 第三方库，后续删除
├─app.js 依据snippets中的片段生成docs以及examples中的最终产出
├─gulpfile.js 通过gulp对项目源文件（CSS/JS）生成dist中的最终产出
├─package.json node说明
└─README.md 项目说明
```
####snippets详细说明：

docs目录与examples目录结构需要对应：docs下md文件在examples对应目录下存在同样名称的文件夹，并且此文件夹下面包含datatable以及ui文件夹用于存放对应示例片段

示例1：

docs/tree.md

examples/examples/tree/datatable以及examples/examples/tree/ui

示例2：

docs/dir/tree.md

examples/examples/dir/tree/datatable以及examples/examples/dir/tree/ui


### 控件开发过程说明

针对控件进行开发，修改css以及js文件之后通过调用gulp dist来生成项目产出

	$ gulp dist

### 示例及文档开发过程说明

针对示例及文档进行开发，修改snippets文件之后通过node app.js来生成示例及文档产出

	$ node app.js