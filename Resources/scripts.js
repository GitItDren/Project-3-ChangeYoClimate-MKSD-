$('#svgMapObject').on('load', function() {
    var svgDocument = this.contentDocument;

    // Tooltip on Hover
    var svgElementsWithTooltips = svgDocument.querySelectorAll("[data-tooltip]");
    $(svgElementsWithTooltips).on('mouseenter', function(event) {
        var tooltipContent = this.getAttribute('data-tooltip');
        $('#svgTooltip').text(tooltipContent).show();
    });
    
    $(svgElementsWithTooltips).on('mousemove', function(event) {
        $('#svgTooltip').css({
            top: event.pageY + 10,
            left: event.pageX + 10
        });
    });

    $(svgElementsWithTooltips).on('mouseleave', function() {
        $('#svgTooltip').hide();
    });

    // Change fill color

    if (!svgDocument) {
        console.error("SVG didn't load correctly.");
        return;
    }
    console.log(svgDocument.querySelectorAll("[data-tooltip]"));

    var svgElementsClickable = svgDocument.querySelectorAll("[data-clickable]");
    $(svgElementsClickable).on('click', function() {
        this.style.fill = "red";
    });

    // Pan and zoom
    var svgPanZoomInstance = svgPanZoom('#svgMapObject', {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true
    });
});
