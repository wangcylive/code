

var objMore;

$(document).ready(function() {
    objMore = $("#more").detach();
    fitToPage();
    $("#monitor_diagonal").html(getDiagonal());
    createBookmarkLink();
});

/**
 * @see https://github.com/mingliangfeng/jBrowserBookmark
 * @see http://labnol.blogspot.com/2006/01/add-to-favorites-ie-bookmark-firefox.html
 * @return void
 */
function createBookmarkLink() {
    var bookmarkText = "";

    if (window.external) {
        bookmarkText = "添加到收藏夹";
    } else if (window.sidebar) {
        bookmarkText = "收藏本页";
    } else if (window.opera && window.print) {
        bookmarkText = "添加收藏";
    }

    if ("" != bookmarkText) {
        $("<a />", {
            href:  "",
            id:    "linkAddThis",
            title: bookmarkText,
            text:  bookmarkText
        }).prependTo($("#addThis")).jBrowserBookmark({
            language: {
                '': ['请同时按下[key] + ', '来' + bookmarkText]
            },
            defaultLanguage: 'cn',
            functionButton: ['CTRL', 'CMD']
        });
    }
}

$.getDocWidth = function() {
    return Math.max(
        $(document).width(),
        $(window).width(),
        /* For opera: */
        document.documentElement.clientWidth
    );
};

$.getDocHeight = function() {
    return Math.max(
        $(document).height(),
        $(window).height(),
        /* For opera: */
        document.documentElement.clientHeight
    );
};

function getDiagonal() {
    var pixelWidth  = $("#inchElement").width();
    var pixelHeight = $("#inchElement").height();

    var screenInchWidth  = screen.width / pixelWidth;
    var screenInchHeight = screen.height / pixelHeight;

    var screenDiagonalInches = Math.round(Math.sqrt(screenInchWidth * screenInchWidth + screenInchHeight * screenInchHeight));

    return screenDiagonalInches;
}

function togDisp(e) {
    stopB(e);

    // Don't use $("#more").toggle() or $("#more").css("display", "none"); here coz the CSS would gone and the block moves
    if (objMore) {
        objMore.appendTo($("#mainText"));
        objMore = null;
    } else {
        objMore = $("#more").detach();
    }

    return false;
}

function stopB(e) {
    if (e != null) {
        e.stopPropagation();
    }
}

function resizeRuler(diagonal, aspectRatio) {
    var imageIds = new Array(
        "beginElement",
        "firstElement",
        "secondElement",
        "thirdElement",
        "lastElement"
    );
    var imagesWidth = new Array(
        0.403,
        4.133,
        3.94,
        3.933,
        0.057
    );

    togDisp();

    var rulerSize = 0;
    var windowWidth = $.getDocWidth();
    for (var i = 0; i < imageIds.length; i++) {
        var elem = $("#" + imageIds[i]);
        var width = imagesWidth[i] * screen.width/(diagonal*aspectRatio/(Math.sqrt(aspectRatio*aspectRatio + 1)));
        rulerSize = rulerSize + width;
        elem.width(width);
        if ( windowWidth < rulerSize && elem.attr('id') != imageIds[4]) {
            elem.hide();
        } else {
            elem.show();
        }
    }
}

function fitToPage() {
    var imageIds = new Array("secondElement", "thirdElement");
    var tenCmSizeAtPixels = document.getElementById("firstElement").width;
    var rulerSize = document.getElementById("beginElement").width + tenCmSizeAtPixels;

    var i = 0;
    while (i < imageIds.length && rulerSize < ($.getDocWidth() - tenCmSizeAtPixels)) {
        $("#" + imageIds[i]).show();
        rulerSize = (rulerSize + tenCmSizeAtPixels);
        i++;
    }
}

function showPopup() {
    $("#inputPanel").show();
    updateControls();
}

function hidePopup() {
    $("#inputPanel").hide();
}

function popupOnclick() {
    hidePopup();
    resizeRuler($("#diagonalField").val(), ($("#aspectHeightField").val() / $("#aspectWidthField").val()));
}

function numberFieldListener(obj) {
    var numb = "0123456789.";
    var w = "";
    for (var i=0; i < obj.value.length; i++) {
        var x = obj.value.charAt(i);
        if (numb.indexOf(x, 0) != -1)
            w += x;
    }
    obj.value = w;
}

function updateControls() {
    if ($("#diagonalField").val() && $("#aspectHeightField").val() && $("#aspectWidthField").val()) {
        $("#createButton").prop('disabled', false);
    } else {
        $("#createButton").prop('disabled', true);
    }
}
