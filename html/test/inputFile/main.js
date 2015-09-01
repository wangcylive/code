/**
 * Created by Wangcy on 2015/9/1.
 */
(function(w, d) {
    var filesInput = d.getElementById("files"),
        preview = d.getElementById("preview");

    var fragment = d.createDocumentFragment();

    var unitConvert = function(size) {
        var GB = Math.pow(1024, 3),
            MB = Math.pow(1024, 2),
            KB = 1024;

        if(size > GB) {
            return (size / GB).toFixed(2) + "GB";
        } else if(size > MB) {
            return (size / MB).toFixed(2) + "MB";
        } else if(size > KB) {
            return (size / KB).toFixed(2) + "KB";
        } else {
            return size + "byte";
        }
    };

    var URL = window.URL || window.webkitURL;
    filesInput.addEventListener("change", function(event) {
        var fileList = event.target.files;

        var previewChild = preview.childNodes;

        while(previewChild.length) {
            var item = previewChild[previewChild.length - 1],
                img = item.querySelector("img");
            if(img && img.src) {
                URL.revokeObjectURL(img.src);
            }
            preview.removeChild(item);
        }

        if(fileList.length > 0) {
            var fileListArray = Array.prototype.slice.call(fileList, 0);
            var imageFileList = fileListArray.filter(function(item, index) {
                if(/image\/(png|jpeg|gif)/.test(item.type)) {
                    return item;
                }
            });

            imageFileList.forEach(function(item, index) {
                var div = d.createElement("div");
                div.className = "list";
                var p = d.createElement("p");
                p.innerHTML = "type:<strong>" + item.type + "</strong>, size:<strong>" + unitConvert(item.size) + "</strong>";
                var img = new Image();
                img.src = URL.createObjectURL(item);
                div.appendChild(p);
                div.appendChild(img);
                fragment.appendChild(div);
            });

            preview.appendChild(fragment);
        }

        /*var URL = window.URL || window.webkitURL;

        var img = new Image();
        img.src = URL.createObjectURL(fileList[0]);
        preview.appendChild(img);*/


        /*var reader = new FileReader();
         reader.readAsDataURL(files[0]);
         reader.onload = function() {
         var img = new Image();
         img.src = this.result;
         filesInput.parentNode.insertBefore(img, filesInput.nextSibling);
         }*/
    }, false);
}(window, document));