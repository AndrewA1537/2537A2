function loadEvents() {
    $.ajax({
        url: `http://localhost:3000/timeline/getAllEvents`,
        type: "GET",
        success: (x) => {
            console.log(x);

            for (i = 0; i < x.length; i++) {
                $("main").html(
                    `
                    <p>
                        Event Text - ${x[i].text}
                    <br>
                        Event Time - ${x[i].time}
                    <br>
                        Event Hits - ${x[i].hits}
                    </p>
                    `
                );
            };
        }
    });
};

function setup() {
    loadEvents();
}


$(document).ready(setup);