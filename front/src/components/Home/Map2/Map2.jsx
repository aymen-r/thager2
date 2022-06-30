import React, { useRef, useLayoutEffect } from "react";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function Map2(props) {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
      })
    );

    var cont = chart.children.push(
      am5.Container.new(root, {
        layout: root.horizontalLayout,
        x: 20,
        y: 40,
      })
    );

    // Add labels and controls
    cont.children.push(
      am5.Label.new(root, {
        centerY: am5.p50,
        text: "Map",
      })
    );

    var switchButton = cont.children.push(
      am5.Button.new(root, {
        themeTags: ["switch"],
        centerY: am5.p50,
        icon: am5.Circle.new(root, {
          themeTags: ["icon"],
        }),
      })
    );

    switchButton.on("active", function () {
      if (!switchButton.get("active")) {
        chart.set("projection", am5map.geoMercator());
        chart.set("panX", "translateX");
        chart.set("panY", "translateY");
      } else {
        chart.set("projection", am5map.geoOrthographic());
        chart.set("panX", "rotateX");
        chart.set("panY", "rotateY");
      }
    });

    cont.children.push(
      am5.Label.new(root, {
        centerY: am5.p50,
        text: "Globe",
      })
    );

    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
      })
    );

    var graticuleSeries = chart.series.push(
      am5map.GraticuleSeries.new(root, {})
    );
    graticuleSeries.mapLines.template.setAll({
      stroke: root.interfaceColors.get("alternativeBackground"),
      strokeOpacity: 0.08,
    });

    // Create line series for trajectory lines
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
    var lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
    lineSeries.mapLines.template.setAll({
      stroke: root.interfaceColors.get("alternativeBackground"),
      strokeOpacity: 0.6,
    });

    // destination series
    var citySeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    citySeries.bullets.push(function () {
      var circle = am5.Circle.new(root, {
        radius: 5,
        tooltipText: "{title}",
        tooltipY: 0,
        fill: am5.color(0xffba00),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2,
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    // arrow series
    var arrowSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    arrowSeries.bullets.push(function () {
      var arrow = am5.Graphics.new(root, {
        fill: am5.color(0x000000),
        stroke: am5.color(0x000000),
        draw: function (display) {
          display.moveTo(0, -3);
          display.lineTo(8, 0);
          display.lineTo(0, 3);
          display.lineTo(0, -3);
        },
      });

      return am5.Bullet.new(root, {
        sprite: arrow,
      });
    });

    var cities = [
      {
        id: "abu dhabi",
        title: "الإمارات العربية المتحدة",
        geometry: { type: "Point", coordinates: [54.3705, 24.4764] },
      },
      {
        id: "muscat",
        title: "عمان",
        geometry: { type: "Point", coordinates: [58.5922, 23.6086] },
      },
      {
        id: "doha",
        title: "قطر",
        geometry: { type: "Point", coordinates: [51.5082, 25.2948] },
      },
      {
        id: "manama",
        title: "البحرين",
        geometry: { type: "Point", coordinates: [50.5354, 26.1921] },
      },
      {
        id: "kuwait",
        title: "الكويت‎",
        geometry: { type: "Point", coordinates: [47.9824, 29.3721] },
      },
      {
        id: "riyadh",
        title: "السعودية",
        geometry: { type: "Point", coordinates: [46.6977, 24.6748] },
      },
      {
        id: "amman",
        title: "الأردن",
        geometry: { type: "Point", coordinates: [35.9349, 31.9394] },
      },
      {
        id: "beyrouth",
        title: "لبنان",
        geometry: { type: "Point", coordinates: [35.5134, 33.8872] },
      },
      {
        id: "asmara",
        title: "إرتريا",
        geometry: { type: "Point", coordinates: [38.9183, 15.3315] },
      },
      {
        id: "djibouti",
        title: "جيبوتي",
        geometry: { type: "Point", coordinates: [43.1425, 11.5806] },
      },
      {
        id: "mogadishu",
        title: "الصومال",
        geometry: { type: "Point", coordinates: [45.3426, 2.0411] },
      },
      {
        id: "addis Abeba",
        title: "إثيوبيا",
        geometry: { type: "Point", coordinates: [38.7575, 9.0084] },
      },
      {
        id: "kigali",
        title: "رواندا",
        geometry: { type: "Point", coordinates: [30.0619, -1.9441] },
      },
      {
        id: "chad",
        title: "تشاد‎",
        geometry: { type: "Point", coordinates: [19.2841, 10.8101] },
      },
      {
        id: "yaounde",
        title: "الكاميرون",
        geometry: { type: "Point", coordinates: [11.5217, 3.8612] },
      },
      {
        id: "abuja",
        title: "نيجيريا",
        geometry: { type: "Point", coordinates: [7.4891, 9.058] },
      },
      {
        id: "yamoussoukro",
        title: "ساحل العاج",
        geometry: { type: "Point", coordinates: [-5.2728, 6.8067] },
      },
      {
        id: "monrovia",
        title: "ليبيريا",
        geometry: { type: "Point", coordinates: [-10.8047, 6.3106] },
      },
      {
        id: "Freetown",
        title: "سيراليون",
        geometry: { type: "Point", coordinates: [-13.2659, 8.4697] },
      },
      {
        id: "accra",
        title: "غانا",
        geometry: { type: "Point", coordinates: [-0.2074, 5.5401] },
      },
    ];

    citySeries.data.setAll(cities);

    // prepare line series data
    var destinations = [
      "muscat",
      "doha",
      "accra",
      "Freetown",
      "monrovia",
      "yamoussoukro",
      "abuja",
      "yaounde",
      "chad",
      "addis Abeba",
      "kigali",
      "mogadishu",
      "djibouti",
      "manama",
      "asmara",
      "beyrouth",
      "amman",
      "riyadh",
      "kuwait",
      "muscat",
      "manama",
      "doha",
    ];
    // London coordinates
    var originLongitude = 54.3705;
    var originLatitude = 24.4764;

    am5.array.each(destinations, function (did) {
      var destinationDataItem = citySeries.getDataItemById(did);
      var lineDataItem = lineSeries.pushDataItem({
        geometry: {
          type: "LineString",
          coordinates: [
            [originLongitude, originLatitude],
            [
              destinationDataItem.get("longitude"),
              destinationDataItem.get("latitude"),
            ],
          ],
        },
      });

      arrowSeries.pushDataItem({
        lineDataItem: lineDataItem,
        positionOnLine: 0.5,
        autoRotate: true,
      });
    });

    polygonSeries.events.on("datavalidated", function () {
      chart.zoomToGeoPoint({ longitude: -0.1262, latitude: 51.5002 }, 3);
    });

    // Make stuff animate on load
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "600px" }}></div>;
}
export default Map2;
