getJsOn();

function buildSite(data) {
    var list = document.getElementById('list');
    data.forEach(function (value, i) {
        let item_list = document.createElement('div');
        item_list.className = 'item_list';
        list.appendChild(item_list);

        let item_content = document.createElement('div');
        item_content.className = 'item_content';
        item_list.appendChild(item_content);

        let item_title = document.createElement('div');
        item_title.className = 'item_title';
        item_content.appendChild(item_title);

        let it_item1 = document.createElement('div');
        it_item1.className = 'item';
        item_title.appendChild(it_item1);

        let star = document.createElement('div');
        star.className = 'star';
        star.dataset.toggle = 'tooltip';
        star.dataset.placement = 'top';
        star.title = 'Featured Job';
        it_item1.appendChild(star);

        let icon = document.createElement('i');
        icon.className = 'fa fa-star';
        star.appendChild(icon);

        let title = document.createElement('div');
        title.className = 'title';
        it_item1.appendChild(title);

        let a = document.createElement('a');
        a.href = "#";
        a.textContent = value.title;
        title.appendChild(a);


        let it_item2 = document.createElement('div');
        it_item2.className = 'item';
        item_title.appendChild(it_item2);
        // item_title.appendChild(it_item1);

        let part_time = document.createElement('div');
        part_time.className = 'part_time';
        part_time.textContent = value.part_time;
        it_item2.appendChild(part_time);
        // it_item1.appendChild(part_time);

        let heart = document.createElement('div');
        heart.className = 'heart';
        star.dataset.toggle = 'tooltip';
        star.dataset.placement = 'top';
        star.title = 'Add to favorite';
        it_item2.appendChild(heart);
        // it_item1.appendChild(heart);

        let span_heart = document.createElement('span');
        span_heart.className = 'fa fa-heart fa fa-heart-o';
        heart.appendChild(span_heart);
        // it_item1.appendChild(span_heart);


        let item_loc_date = document.createElement('div');
        item_loc_date.className = 'item_loc_date';
        item_content.appendChild(item_loc_date);

        let ild_item1 = document.createElement('div');
        ild_item1.className = 'item';
        item_loc_date.appendChild(ild_item1);

        let map = document.createElement('div');
        map.className = 'map';
        ild_item1.appendChild(map);

        let icon_map = document.createElement('i');
        icon_map.className = 'fa fa-map-marker';
        map.appendChild(icon_map);

        let ild_item1_subtitle = document.createElement('div');
        ild_item1_subtitle.className = 'subtitle';
        ild_item1_subtitle.textContent = value.city;
        ild_item1.appendChild(ild_item1_subtitle);


        let ild_item2 = document.createElement('div');
        ild_item2.className = 'item';
        item_loc_date.appendChild(ild_item2);

        let suitcase = document.createElement('div');
        suitcase.className = 'suitcase';
        ild_item2.appendChild(suitcase);

        let icon_suitcase = document.createElement('i');
        icon_suitcase.className = 'fa fa-suitcase';
        suitcase.appendChild(icon_suitcase);

        let ild_item2_subtitle = document.createElement('div');
        ild_item2_subtitle.className = 'subtitle';
        ild_item2_subtitle.textContent = value.direction;
        ild_item2.appendChild(ild_item2_subtitle);


        let ild_item3 = document.createElement('div');
        ild_item3.className = 'item';
        item_loc_date.appendChild(ild_item3);

        let calendar = document.createElement('div');
        calendar.className = 'calendar';
        ild_item3.appendChild(calendar);

        let icon_calendar = document.createElement('i');
        icon_calendar.className = 'fa fa-suitcase';
        calendar.appendChild(icon_calendar);

        let ild_item3_subtitle = document.createElement('div');
        ild_item3_subtitle.className = 'subtitle';
        ild_item3_subtitle.textContent = value.calendar_date;
        ild_item3.appendChild(ild_item3_subtitle);


        let item_text = document.createElement('div');
        item_text.className = 'item_text';
        item_text.textContent = value.item_text;
        item_content.appendChild(item_text);


        let tags_price = document.createElement('div');
        tags_price.className = 'tags_price';
        item_list.appendChild(tags_price);

        let tags = document.createElement('div');
        tags.className = 'tags';
        tags_price.appendChild(tags);


        value.tags.forEach(function (t) {

            let tag = document.createElement('div');
            tag.className = 'tag';
            tag.innerHTML = '<i class="fa fa-tag"></i>' + t;
            tags.appendChild(tag);

        });

        let price = document.createElement('div');
        price.className = 'price';
        tags_price.appendChild(price);

        let cost = document.createElement('div');
        cost.className = 'cost';
        cost.textContent = value.cost;
        price.appendChild(cost);

    })
}


// load JSON
function getJsOn() {

    var file = "resources/json/jobs.json";
    // var myObj;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // myObj = JSON.parse(this.responseText);
            // return JSON.parse(this.responseText);
            buildSite(JSON.parse(this.responseText));
        }
    };
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
}