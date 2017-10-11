window.onload = function(){

  var $ = function(dom){
    return document.querySelectorAll(dom);
  }

  var editorArea = $("#editorArea")[0];

  var editorMenuList = [
    ['bold',null,'粗体'],
    ['italic',null,'斜体'],
    ['strikeThrough',null,'删除线'],
    ['underline',null,'下划线'],
    ['delete',null,'删除'],
    ['cut',null,'剪切'],
    ["createLink",null,'添加锚链接'],
    ['unlink',null,'删除锚链接'],
    ['insertImage',null,'插入图片'],
    ["insertOrderedList",null,'插入有序列表'],
    ["insertUnorderedList",null,'插入无序列表']
  ]

  //初始化编辑器
  initEditor();

  function initEditor() {
    openOrCloseEditor("editorArea", "true");
  }

  function openOrCloseEditor(ele, bool) {
    var el = document.getElementById(ele);
    el.contentEditable = bool;
  }
  

  (function() {
    var editorMenu = document.getElementById("editorMenu");

    editorMenuList.forEach(function(item, index) {
      console.log(item);
      var li = document.createElement("li");
      var i = document.createElement("i");
      i.setAttribute("class", "iconfont icon-" + item[0]);
      i.setAttribute("title", item[2]);
      li.appendChild(i);

      li.onmousedown = function(e){
        // var text = document.selection.createRange();
        // console.log(text)
        //移除切换焦点的默认事件
        e.preventDefault();
        if(item[0] === 'createLink' ){
          console.log('绑定锚链接');
          var link = prompt('请输入网址');
        }
        var aa = document.execCommand(item[0], false, item[1]);
        
      }

      editorMenu.appendChild(li);
    });

  })()
 
  document.getElementById('fontColor').onchange = function(e){
    document.execCommand('foreColor', false, this.value);
  }

  document.getElementById('fontBackColor').onchange = function(e){
    document.execCommand("backColor", false, this.value);
  }

  document.getElementById('fontFamily').onclick = function(e){
    var aValueArgument = e.target.dataset.family;
    document.execCommand("fontName", false, aValueArgument);
  }

  document.getElementById("fontSize").onclick = function(e) {
    var aValueArgument = e.target.dataset.size;
    document.execCommand("fontSize", false, aValueArgument);
  }

  document.getElementById('saveEditor').onclick = function(e){
    console.log(document.getElementById("editorArea").innerHTML);
  }

  
}