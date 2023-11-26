
// download
$(function () {
    var progressbar = $("#progressbar"),
        progressLabel = $(".progress-label");

    progressbar.progressbar({
        value: false,
        change: function () {
            progressLabel.text(progressbar.progressbar("value") + "%");
        },
    });

    function progress() {
        var val = progressbar.progressbar("value") || 0;

        progressbar.progressbar("value", val + 4);

        if (val < 99) {
            setTimeout(progress, 80);
        }
    }

    setTimeout(progress, 1500);

    setTimeout(() => {
        $('.download').addClass('hide');
    }, 4000);

    
    
});