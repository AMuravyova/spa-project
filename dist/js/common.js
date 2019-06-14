"use strict";

/**
 * Created by amurav on 27.02.2017.
 */
/**
 * Created by amurav on 27.02.2017.
 */
$(document).ready(function () {

    $(".menu__button").click(function () {

        if ($(".menu__tabs__toggle ul").css("visibility") === "visible") {
            $(".menu__tabs__toggle ul").slideToggle("slow");
        } else {
            $(".menu__tabs__toggle ul").css("visibility", "visible");
        }
    });

    $(".btn_send").click(function () {

        var ctx = this;

        var form = ctx.parentNode;
        var listFormChildren = form.children;
        var newPath = listFormChildren[0].value;

        var newBGImg = "url(\"" + newPath + "\")";
        var inputImg = $(".picture").css("background-image", newBGImg);
    });

    $(".edit_btn").click(function () {
        var ctx = this;
        return function () {
            var parentBlock = ctx.parentNode;
            var listBlockChildren = parentBlock.children;
            if (listBlockChildren[1].className === "paragrath") {
                var listButtonChildren = listBlockChildren[0].children;
                listButtonChildren[0].className = "glyphicon glyphicon-ok";

                var paraText = listBlockChildren[1].innerHTML;
                var isArea = document.createElement("textarea");
                isArea.className = "textarea";
                isArea.rows = "7";
                isArea.cols = "30";
                var node = document.createTextNode(paraText);
                isArea.appendChild(node);
                parentBlock.removeChild(listBlockChildren[1]);
                parentBlock.appendChild(isArea);
            } else if (listBlockChildren[1].className === "textarea") {
                listButtonChildren = listBlockChildren[0].children;
                listButtonChildren[0].className = "glyphicon glyphicon-pencil";
                var areaText = listBlockChildren[1].value;
                var isP = document.createElement("p");
                isP.className = "paragrath";
                var node = document.createTextNode(areaText);
                isP.appendChild(node);
                parentBlock.removeChild(listBlockChildren[1]);
                parentBlock.appendChild(isP);
            }
        }();
    });
});