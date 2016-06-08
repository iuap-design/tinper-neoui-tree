# 树控件

树控件以z-tree为原型，主要处理了与datatable之间的关联。

# 如何使用

暂无

# 示例

参照[ztree官网](http://www.ztree.me/v3/demo.php#_101)

<!--### 示例1

示例1说明

### 示例2

示例2说-->

# API

参照[ztree官网](http://www.ztree.me/v3/api.php)


# datatable关联使用

## 如何使用

	<div id="treeTest" class="ztree" u-meta='{"id":"tree2","data":"dataTable","type":"tree","idField":"id","pidField":"pid","nameField":"title","setting":"treeSetting"}'></div>

## 示例

### base
<pre><code>var viewModel = {
    treeSetting:{
        view:{
            showLine:false,
            selectedMulti:false
        },
        callback:{
            onClick:function(e,id,node){
                alert(id)
                alert(node)
            }
        },
        check: {
            enable: true,
            chkboxType:{ "Y" : "ps", "N" : "ps" }
        }
    },
    dataTable: new u.DataTable({
        meta: {
            'id': {
                'value':""
            },
            'pid': {
                'value':""
            },
            'title':{
                'value':""
            }
        }
    })
};
var app = u.createApp({
    el: '.demo',
    model: viewModel
})
var data = {
  "pageIndex": 1,
  "pageSize": 10,
  "rows": [
    {
      "status": "nrm",
      "data": {
        "id": "01",
        "pid": "root",
        "title": "f1"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "02",
        "pid": "root",
        "title": "f2"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "101",
        "pid": "01",
        "title": "f11"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "102",
        "pid": "01",
        "title": "f12"
      }
    },
    {
      "status": "nrm",
      "data": {
        "id": "201",
        "pid": "02",
        "title": "f21"
      }
    }
  ]
}
viewModel.dataTable.setData(data);

var addOneRow1 = document.querySelector('#addOneRow1'),
    deleteOneRow = document.querySelector('#deleteOneRow'),
    deleteAllRows = document.querySelector('#deleteAllRows');
u.on(addOneRow1, "click",function(){
    var row={
        "status": "nrm",
        "data": {
            "id": "202",
            "pid": "02",
            "title": "f22"
        }};
    //先创建行模型，然后将数据插入行
    var r=new u.Row({parent:viewModel.dataTable});
    r.setData(row);
    //新增一行
    viewModel.dataTable.addRow(r);
});

u.on(deleteOneRow, "click",function(){
    var indices=viewModel.dataTable.getSelectedIndices();
    viewModel.dataTable.removeRows(indices)
});
u.on(deleteAllRows, "click",function(){
    viewModel.dataTable.removeAllRows();
})
</code></pre>
<pre><code>&lt;div class="demo">
    &lt;div id="demoLeft">&lt;div id="treeTest" class="ztree" u-meta='{"id":"tree2","data":"dataTable","type":"tree","idField":"id","pidField":"pid","nameField":"title","setting":"treeSetting"}'>&lt;/div>&lt;/div>
    &lt;hr />
    &lt;h4>dataTable操作&lt;/h4>
    &lt;button type="button" class="u-button raised" id="addOneRow1">新增节点&lt;/button>
    &lt;button type="button" class="u-button raised" id="deleteOneRow">删除节点&lt;/button> 
    &lt;button type="button" class="u-button raised" id="deleteAllRows">删除全部节点&lt;/button>
&lt;/div>

</code></pre>



<!--### 示例1

示例1说明

### 示例2

示例2说-->