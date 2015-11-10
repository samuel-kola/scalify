(function ($) {

    $.fn.scalify = function (options) {

        var settings = $.extend({}, $.fn.scalify.defaults, options);

        var scalerElement = $(this);
        scalerElement.addClass("scaler");

        scalerElement.append("<div class='circle' style='display: none;width:" + settings.indicatorSize + "px;height:" + settings.indicatorSize + "px;' />");
        scalerElement.append("<div class='indicator-arrow' style='display: none;'><span class='indicator-arrow-text'/></div>");

        var startCount = settings.startCount;
        var endCount = settings.endCount;
        var padding = settings.padding;
        for (var i = endCount; i >= startCount ; i = (i - settings.minorInterval)) {
            var top = (i * padding);
            var indicatorText = (endCount - i);
            var id = "spn_" + indicatorText;
            if (i % settings.majorInterval == 0) {
                if (settings.showMajorIntervalText) {
                    scalerElement.append("<span class='indicator-text-major' style='top:" + (top + padding + 3) + "px;height:" + padding + "px;'>" + indicatorText + "</span>");
                }
                scalerElement.append("<span id='" + id + "' class='indicator-big' data-indicator='" + indicatorText + "' style='top:" + top + "px;height:" + padding + "px;'></span>");
            }
            else {
                if (settings.showMinorIntervalText) {
                    scalerElement.append("<span class='indicator-text-minor' style='top:" + (top + padding + 3) + "px;height:" + padding + "px;'>" + indicatorText + "</span>");
                }
                scalerElement.append("<span id='" + id + "' class='indicator-small' data-indicator='" + indicatorText + "' style='top:" + top + "px;;height:" + padding + "px;'></span>");
            }
        }

        $(".indicator-small,.indicator-big").on("click", function (e) {
            var indicatorText = $(this).data("indicator");
            showIndicatorText(indicatorText);
        });

        $(".indicator-small,.indicator-big").on("hover", function (e) {
            var indicatorText = $(this).data("indicator");
            showIndicatorArrow(indicatorText);
        });

        $(".indicator-small,.indicator-big").on("mouseleave", function (e) {
            hideIndicatorArrow();
        });

        $(".circle").on("hover", function (e) {
            $(".circle").css("z-index", 0);
        });

        showIndicatorText = function (indicatorText) {
            var indicatorID = $("#spn_" + indicatorText);
            var indicatorTop = indicatorID.offset().top - ($(".circle").height() / 6.0) + (indicatorID.height() / 2.0);
            var indicatorLeft = indicatorID.offset().left - ($(".circle").width() / 2.0) + (indicatorID.width() / 2.0);
            if (indicatorID.attr("class") === "indicator-big") {
                indicatorLeft = indicatorLeft - 1;
            }
            $(".circle").show();
            $(".circle").offset({ left: indicatorLeft, top: indicatorTop });
            showIndicatorArrow(indicatorText);
            settings.onScalerClick.call(indicatorText);
        };

        showIndicatorArrow = function (indicatorText) {
            $(".circle").css("z-index", 0);
            var indicatorID = $("#spn_" + indicatorText);
            var indicatorArrow = $(".indicator-arrow");
            var indicatorArrowText = $(".indicator-arrow-text");
            var indicatorTop = indicatorID.offset().top + (indicatorID.height() / 2.0);
            var indicatorLeft = indicatorID.offset().left + (indicatorID.width() / 2.0) + 10;
            if (indicatorID.attr("class") === "indicator-big") {
                indicatorLeft = indicatorLeft - 1;
            }
            indicatorArrowText.text(indicatorText);
            indicatorArrow.css("display", "inline-block");
            indicatorArrow.show();
            indicatorArrow.offset({ left: indicatorLeft, top: indicatorTop });
        };

        hideIndicatorArrow = function () {
            $(".circle").css("z-index", 1);
            var indicatorArrow = $(".indicator-arrow");
            indicatorArrow.hide();
        };

        return this;
    };

    $.fn.scalify.defaults = {
        // padding between counters
        padding: 4,
        // start counter
        startCount: 0,
        // end counter
        endCount: 100,
        // size of the dot
        indicatorSize: 12,
        // interval between two counters
        minorInterval: 1,
        // interval between two major counters
        majorInterval: 10,
        // show/hide major interval text
        showMajorIntervalText: true,
        // show/hide minor interval text
        showMinorIntervalText: false,
        // event fired on scaler click
        onScalerClick: function () { }
    };

}(jQuery)); 
