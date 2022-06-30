import bcrypt from "bcryptjs";

const data = {
  products: [
    {
      // _id: "1",
      name: "Canadian Solar Hiku5 475W- 500W",
      price: 490,
      category: "panels",
      image: "/img/panels/halfCell/Canadian_Solar.jpg", // 679px × 829px
      watts: "475W- 500W",
      type: "Half Cell",
      tag: "Tier one",
      brand: "Canadian solar",
      description:
        "Up to 465W front power and 21.3% module efficiency with half-cut and MBB (Multi Busbar) technology bringing more BOS savings. The lower resistance of half-cut and good refection effect of MBB ensure high power.",
    },
    {
      // _id: "1",
      name: "JA 405W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/JA_SOLAR.jpg", // 679px × 829px
      watts: "405w",
      type: "half cell",
      tag: "Tier one",
      brand: "JA solar",
      description:
        "Higher output Power. Lower LCOE. Less shading and lower resistive loss. Better mechanical loading tolerance.",
    },
    {
      // _id: "1",
      name: "Jinko 530-550 W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Jinko-Solar.jpg", // 679px × 829px
      watts: "530 W-550 W",
      type: "half cell",
      tag: "Tier one",
      brand: "Jinko solar",
      description:
        "Multi Busbar Technology. Reduced Hot Spot Loss. Longer Lifetime Power Yield. Durability Against Extreme Environmental Conditions. Enhanced Mechanical Load.",
    },
    {
      // _id: "1",
      name: "Longi 450W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Longi-Solar.jpg", // 679px × 829px
      watts: "450 W",
      type: "half cell",
      tag: "Tier one",
      brand: "LONGI solar",
      description:
        "Based on M10-182mm wafer, best Choice for ultra-large power plants. Advanced module technology delivers superior module efficiency. Globally Validated Bifacial Energy Yield. High module quality ensures long-term reliability.",
    },
    {
      // _id: "1",
      name: "Longi 530W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Longi-Solar.jpg", // 679px × 829px
      watts: "530 W",
      type: "half cell",
      tag: "Tier one",
      brand: "LONGI solar",
      description:
        "Based on M10-182mm wafer, best Choice for ultra-large power plants. Advanced module technology delivers superior module efficiency. Globally Validated Bifacial Energy Yield. High module quality ensures long-term reliability.",
    },
    {
      // _id: "1",
      name: "Longi 545W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Longi-Solar.jpg", // 679px × 829px
      watts: "545 W",
      type: "half cell",
      tag: "Tier one",
      brand: "LONGI solar",
      description:
        "Based on M10-182mm wafer, best Choice for ultra-large power plants. Advanced module technology delivers superior module efficiency. Globally Validated Bifacial Energy Yield. High module quality ensures long-term reliability.",
    },
    {
      // _id: "1",
      name: "Risen 525W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Risen_525W.jpg", // 679px × 829px
      watts: "525W",
      type: "half cell",
      tag: "Tier one",
      brand: "Risen",
      description:
        "150 Cell Mono PERC Module 450-500Wp Power Output Range Global Tier 1 Bankable brand, with independently certified tate-of-the-art automated manufacturing. Industry-leading lowest thermal co-efficient of power. Excellent low irradiance performance.",
    },
    {
      // _id: "1",
      name: "Tokkma 410W-490W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Tokkma_410W-490W.png", // 679px × 829px
      watts: "410 – 490W",
      type: "half cell",
      tag: "Tokkma",
      brand: "Tokkma",
      description:
        "High module efficiency through superior manufacturing technology No power loss thanks to improved temperature co-efficient caused by 9 busbars solar cell. Strictly control the micro-crack of solar cells and the other non-visible defect of internal modules. The module can bear snow loads up to 5400Pa and wind loads up to 2400Pa. Manufactured according to and certified international I Quality and Environment Management System. Using advanced low reflection and high light transmission glass and cell sheet surface cutting technology, in the weak light environment can also play a good performance.",
    },
    {
      // _id: "1",
      name: "Tokkma 440W- 460W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Tokkma_440W-460W.png", // 679px × 829px
      watts: "440-460W",
      type: "half cell",
      tag: "Tokkma",
      brand: "Tokkma",
      description:
        "Widely using of the most popular and mature type of modules for solar system High Power output and highest conversion efficiency of 20.82%. Anti-reflective and anti-soiling surface reduces power loss from dirt and dust. outstanding performance in low-light irradiance environments. Excellent mechanical load resistance: Certified to withstand high wind loads (2400pa) and Snow loads ( 5400Pa) Positive Power tolerance: 0~+5W",
    },
    {
      // _id: "1",
      name: "Tokkma 450W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Tokkma_450W.png", // 679px × 829px
      watts: "450W",
      type: "half cell",
      tag: "Tokkma",
      brand: "Tokkma",
      description:
        "High module efficiency through superior manufacturing technology No power loss thanks to improved temperature co-efficient caused by 9 busbars solar cell. Strictly control the micro-crack of solar cells and the other non-visible defect of internal modules. The module can bear snow loads up to 5400Pa and wind loads up to 2400Pa. Manufactured according to and certified international I Quality and Environment Management System. Using advanced low reflection and high light transmission glass and cell sheet surface cutting technology, in the weak light environment can also play a good performance.",
    },
    {
      // _id: "1",
      name: "Tokkma 510W-680W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Tokkma_510W-680W.png", // 679px × 829px
      watts: "510-680W",
      type: "half cell",
      tag: "Tokkma",
      brand: "Tokkma",
      description:
        "Widely using of the most popular and mature type of modules for solar system High Power output and highest conversion efficiency of 20.82%. Anti-reflective and anti-soiling surface reduces power loss from dirt and dust. outstanding performance in low-light irradiance environments. Excellent mechanical load resistance: Certified to withstand high wind loads (2400pa) and Snow loads ( 5400Pa) Positive Power tolerance: 0~+5W",
    },
    {
      // _id: "1",
      name: "Tokkma 560W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Tokkma_560W.png", // 679px × 829px
      watts: "560W",
      type: "half cell",
      tag: "Tokkma",
      brand: "Tokkma",
      description:
        "Widely using of the most popular and mature type of modules for solar system High Power output and highest conversion efficiency of 20.82%. Anti-reflective and anti-soiling surface reduces power loss from dirt and dust. outstanding performance in low-light irradiance environments. Excellent mechanical load resistance: Certified to withstand high wind loads (2400pa) and Snow loads ( 5400Pa) Positive Power tolerance: 0~+5W",
    },
    {
      // _id: "1",
      name: "Tokkma 580W-610W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Tokkma_580W-610W.png", // 679px × 829px
      watts: "580-610W",
      type: "half cell",
      tag: "Tokkma",
      brand: "Tokkma",
      description:
        "Widely using of the most popular and mature type of modules for solar system High Power output and highest conversion efficiency of 20.82%. Anti-reflective and anti-soiling surface reduces power loss from dirt and dust. outstanding performance in low-light irradiance environments. Excellent mechanical load resistance: Certified to withstand high wind loads (2400pa) and Snow loads ( 5400Pa) Positive Power tolerance: 0~+5W",
    },
    {
      // _id: "1",
      name: "Tokkma 610W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Tokkma_610W.png", // 679px × 829px
      watts: "610W",
      type: "half cell",
      tag: "Tokkma",
      brand: "Tokkma",
      description:
        "Widely using of the most popular and mature type of modules for solar system High Power output and highest conversion efficiency of 20.82%. Anti-reflective and anti-soiling surface reduces power loss from dirt and dust. outstanding performance in low-light irradiance environments. Excellent mechanical load resistance: Certified to withstand high wind loads (2400pa) and Snow loads ( 5400Pa) Positive Power tolerance: 0~+5W",
    },
    {
      // _id: "1",
      name: "Trina 450W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Trina_450W.jpg", // 679px × 829px
      watts: "450W",
      type: "half cell",
      tag: "Tier one",
      brand: "Trina solar",
      description:
        "Up to 465W front power and 21.3% module efficiency with half-cut and MBB (Multi Busbar) technology bringing more BOS savings. The lower resistance of half-cut and good refection effect of MBB ensure high power. Ensured PID resistance through cell process and module material control. Resistant to salt, acid, and ammonia. Mechanical performance: Up to 5400 Pa positive load and 2400 Pa negative load. Excellent IAM and low light performance validated by 3rd party with cell process and module material optimization. Better anti-shading performance and lower operating temperature.",
    },
    {
      // _id: "1",
      name: "Trina 490W",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Trina_490W.jpg", // 679px × 829px
      watts: "490W",
      type: "half cell",
      tag: "Tier one",
      brand: "Trina solar",
      description:
        "Up to 465W front power and 21.3% module efficiency with half-cut and MBB (Multi Busbar) technology bringing more BOS savings. The lower resistance of half-cut and good refection effect of MBB ensure high power. Ensured PID resistance through cell process and module material control. Resistant to salt, acid, and ammonia. Mechanical performance: Up to 5400 Pa positive load and 2400 Pa negative load. Excellent IAM and low light performance validated by 3rd party with cell process and module material optimization. Better anti-shading performance and lower operating temperature.",
    },
    {
      // _id: "1",
      name: "Yingli 450W-166MM",
      price: 542,
      category: "panels",
      image: "/img/panels/halfCell/Yingli_450W-166MM.jpg", // 679px × 829px
      watts: "450W",
      type: "half cell",
      tag: "Tier one",
      brand: "Yingli solar",
      description:
        "Higher Durability The multi-busbar design can decrease the risk of cell micro-cracks and fingers broken. High Power Density High conversion efficiency and more power output per square meter, by lower series resistance and improved light harvesting. Half-cell Design. Less energy loss caused by shading due to new cell string layout and split J-box, and lower cell connection power loss due to half-cell design. Advanced Glass Our high-transmission glass features a unique anti-reflective coating that directs more light on the solar cells, resulting in a higher energy yield.",
    },
    {
      // _id: "1",
      name: "Seraphim 525-540W",
      price: 542,
      category: "panels",
      image: "/img/panels/bifacial/Seraphim_525-540W.png", // 679px × 829px
      watts: "525-540W",
      type: "Bifacial",
      tag: "SERAPHIM",
      brand: "Yingli solar",
      description:
        "Less mismatch to get more power. An ideal choice for utility and commercial-scale projects by reduced BoS and improved ROI. Less power loss by minimizing the shading impact 3 times EL test to ensure the best quality. Competitive low light performance. Outstanding reliability is proven by PVEL for stringent environmental conditions: Sand, acid, salt, and hailstones. 2400 Pa wind load and 5400 Pa snow load. Anti-PID.",
    },

    // sdfqdf54**************************

    // ****************** inverters **********************************
    {
      // _id: "1",
      name: "MUST INVERTER PLUS 2.2-5.5KW",
      price: 300,
      category: "inverters",
      image: "/img/inverter/off-grid/MUST_INVERTER_PLUS_2.2-5.5KW.jpeg", // 679px × 829px
      watts: "2.2-5.5KW",
      type: "Off-Grid",
      tag: "Must",
      brand: "Must",
      description:
        "Rated Power 2KW-5.5KW Pure sine wave output Self-consumption and Feed-in to the grid Programmable supply priority for PV, Battery or Grid User-adjustable battery charging current suits different types of batteries • Programmable multiple operation modes: Grid-tie, off-grid and grid-tie with backup • Monitoring software & Wifi Kit for real-time status display and control • Support parallel operation up to 3 units.",
    },
    {
      // _id: "1",
      name: "MUST INVERTER PRO 3KW-5.2KW",
      price: 300,
      category: "inverters",
      image: "/img/inverter/off-grid/MUST_INVERTER_PRO_3KW-5.2KW.jpg", // 679px × 829px
      watts: "3KW-5.2KW",
      type: "Off-Grid",
      tag: "Must",
      brand: "Must",
      description:
        "Pure sine wave output Smart LCD setting (Working modes, Charge Current, Charge Voltage, etc).  MAX PV Array Open Circuit Voltage: 450V Can provide the power to the load without battery  Combining solar system, AC utility, and battery power source to supply continuous power • Overload, short circuit, and Deep discharge protection Cold start function Support USB, RS485 monitoring function WIFI remote monitoring (optional) Compatible with the generator.",
    },
    {
      // _id: "1",
      name: "TOKKMA – AXPERT MAX 7.2KW",
      price: 300,
      category: "inverters",
      image: "/img/inverter/off-grid/TOKKMA_AXPERT_MAX_7.2KW.jpg", // 679px × 829px
      watts: "7.2KW",
      type: "Off-Grid",
      tag: "Tokkma",
      brand: "Tokkma",
      description:
        "Status indication with RGB lights Built-in Wi-Fi for mobile monitoring (Android/iOS App is available) Supports USB On-the-Go function Reserved communication port for BMS (RS485, CAN-BUS or RS232) Replaceable fan design for ease of maintenance Battery independent design Configurable AC/PV output usage timer and prioritization Selectable high power charging current Selectable input voltage range for home appliances and personal computers Compatible to Utility Mains or generator input Built-in anti-dust kit Optional DC output for DC fan, LED bulb, router, and so on. Parallel operation with 6 units for 7200VA model",
    },
    {
      // _id: "1",
      name: "TOKKMA 1-2-3-5 KW",
      price: 300,
      category: "inverters",
      image: "/img/inverter/off-grid/TOKKMA_1-2-3-5_KW.jpg", // 679px × 829px
      watts: "1-2-3-5 KW",
      type: "Off-Grid",
      tag: "Tokkma",
      brand: "Tokkma",
      description:
        "• Pure sine wave solar inverter Output power factor 1 Selectable high power charging current Wide DC input range Selectable input voltage range for home appliances and personal computers Configurable AC/Solar input priority via LCD setting• Compatible with AC mains or generator power• Auto restart while AC is recovering• Overload and short circuit protection• Battery equalization for optimized battery performance and lifecycle• Cold start function• Optional anti-dusk kit",
    },
    {
      // _id: "1",
      name: "TOKKMA 3.5kw-5.5kw",
      price: 300,
      category: "inverters",
      image: "/img/inverter/off-grid/TOKKMA_3.5kw-5.5kw.jpg", // 679px × 829px
      watts: "3.5kw-5.5kw",
      type: "Off-Grid",
      tag: "Tokkma",
      brand: "Tokkma",
    },
    {
      // _id: "1",
      name: "TOKKMA 8KW",
      price: 300,
      category: "inverters",
      image: "/img/inverter/off-grid/TOKKMA_8KW.jpg", // 679px × 829px
      watts: "8KW",
      type: "Off-Grid",
      tag: "Tokkma",
      brand: "Tokkma",
    },
    {
      // _id: "1",
      name: "TOKKMA VM III 1-3-5KW",
      price: 300,
      category: "inverters",
      image: "/img/inverter/off-grid/TOKKMA_VM_III_1-3-5KW.jpg", // 679px × 829px
      watts: "8KW",
      type: "Off-Grid",
      tag: "Tokkma",
      brand: "Tokkma",
    },
    {
      // _id: "1",
      name: "MUST INVERTER 10KW PRO",
      price: 300,
      category: "inverters",
      image: "/img/inverter/on-grid/MUST_INVERTER_10KW_PRO.jpg", // 679px × 829px
      watts: "10KW",
      type: "On-Grid",
      tag: "Must",
      brand: "Must",
    },
    {
      // _id: "1",
      name: "MUST INVERTER 9KW-12KW",
      price: 300,
      category: "inverters",
      image: "/img/inverter/on-grid/MUST_INVERTER_9KW-12KW.jpg", // 679px × 829px
      watts: "9KW-12KW",
      type: "On-Grid",
      tag: "Must",
      brand: "Must",
    },
    {
      // _id: "1",
      name: "USFULL IP20",
      price: 300,
      category: "inverters",
      image: "/img/inverter/pump/USFULL_IP20.jpg", // 679px × 829px
      watts: "2.2KW",
      type: "Pump",
      tag: "USFULL",
      brand: "USFULL",
    },
    {
      // _id: "1",
      name: "Veichi SI22 Mini",
      price: 300,
      category: "inverters",
      image: "/img/inverter/pump/Veichi_SI22_Mini.jpg", // 679px × 829px
      watts: "2.2KW",
      type: "Pump",
      tag: "Veichi",
      brand: "Veichi",
    },
    {
      // _id: "1",
      name: "Veichi SI23",
      price: 300,
      category: "inverters",
      image: "/img/inverter/pump/Veichi_SI23.jpg", // 679px × 829px
      watts: "_KW",
      type: "Pump",
      tag: "Veichi",
      brand: "Veichi",
    },
    {
      // _id: "1",
      name: "Veichi SI30",
      price: 300,
      category: "inverters",
      image: "/img/inverter/pump/Veichi_SI30.png", // 679px × 829px
      watts: "_KW",
      type: "Pump",
      tag: "Veichi",
      brand: "Veichi",
    },
  ],
};
export default data;
