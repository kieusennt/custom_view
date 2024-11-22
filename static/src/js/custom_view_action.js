/** @odoo-module alias=custom_view.CustomViewComponent**/
import {registry} from "@web/core/registry";

const {Component} = owl;
const {onMounted} = owl.hooks;
const actionRegistry = registry.category("actions");

export default class CustomViewComponent extends Component {
	setup() {
		super.setup(...arguments);

		onMounted(async () => {
			const layout = new dhx.Layout("layout_custom_view", {
				type: "space",
				rows: [
					{
						id: "form_cell",
						height: 50
					},
					{
						id: "grid_cell",
					},
				]
			});

			const form = new dhx.Form(null, {
				cols: [
					{
						type: "button",
						text: "Create",
						id: "btnCreate",
					},
					{
						type: "button",
						text: "Save",
						id: "btnSave",
					}
				],
			});

			const dataset = [
				{
					"country": "China",
					"population": "1415045928",
					"yearlyChange": "0.0039",
					"netChange": "5528531",
					"density": "151",
					"area": "9388211",
					"migrants": "-339690",
					"fert": "1.6",
					"age": "37",
					"urban": "0.5800",
					"id": "1"
				},
				{
					"country": "India",
					"population": "1354051854",
					"yearlyChange": "0.0111",
					"netChange": "14871727",
					"density": "455",
					"area": "2973190",
					"migrants": "-515643",
					"fert": "2.4",
					"age": "27",
					"urban": "0.3200",
					"id": "2",
					"custom": true
				},
				{
					"country": "U.S.",
					"population": "326766748",
					"yearlyChange": "0.0071",
					"netChange": "2307285",
					"density": "36",
					"area": "9147420",
					"migrants": "900000",
					"fert": "1.9",
					"age": "38",
					"urban": "0.8300",
					"id": "3"
				},
				{
					"country": "Indonesia",
					"population": "266794980",
					"yearlyChange": "0.0106",
					"netChange": "2803601",
					"density": "147",
					"area": "1811570",
					"migrants": "-167000",
					"fert": "2.5",
					"age": "28",
					"urban": "0.5400",
					"id": "4"
				},
				{
					"country": "Brazil",
					"population": "210867954",
					"yearlyChange": "0.0075",
					"netChange": "1579676",
					"density": "25",
					"area": "8358140",
					"migrants": "3185",
					"fert": "1.8",
					"age": "31",
					"urban": "0.8400",
					"id": "5"
				},
				{
					"country": "Pakistan",
					"population": "200813818",
					"yearlyChange": "0.0193",
					"netChange": "3797863",
					"density": "260",
					"area": "770880",
					"migrants": "-236384",
					"fert": "3.7",
					"age": "22",
					"urban": "0.3800",
					"id": "6"
				},
				{
					"country": "Nigeria",
					"population": "195875237",
					"yearlyChange": "0.0261",
					"netChange": "4988926",
					"density": "215",
					"area": "910770",
					"migrants": "-60000",
					"fert": "5.7",
					"age": "18",
					"urban": "0.4900",
					"id": "7"
				},
				{
					"country": "Bangladesh",
					"population": "166368149",
					"yearlyChange": "0.0103",
					"netChange": "1698398",
					"density": "1278",
					"area": "130170",
					"migrants": "-505297",
					"fert": "2.2",
					"age": "26",
					"urban": "0.3500",
					"id": "8"
				},
				{
					"country": "Russia",
					"population": "143964709",
					"yearlyChange": "-0.0002",
					"netChange": "-25045",
					"density": "9",
					"area": "16376870",
					"migrants": "203577",
					"fert": "1.7",
					"age": "39",
					"urban": "0.7300",
					"id": "9"
				},
				{
					"country": "Mexico",
					"population": "130759074",
					"yearlyChange": "0.0124",
					"netChange": "1595798",
					"density": "67",
					"area": "1943950",
					"migrants": "-60000",
					"fert": "2.3",
					"age": "28",
					"urban": "0.7800",
					"id": "10"
				},
				{
					"country": "Japan",
					"population": "127185332",
					"yearlyChange": "-0.0023",
					"netChange": "-299118",
					"density": "349",
					"area": "364555",
					"migrants": "71627",
					"fert": "1.4",
					"age": "46",
					"urban": "0.9400",
					"id": "11"
				},
				{
					"country": "Ethiopia",
					"population": "107534882",
					"yearlyChange": "0.0246",
					"netChange": "2577444",
					"density": "108",
					"area": "1000000",
					"migrants": "-12000",
					"fert": "4.6",
					"age": "19",
					"urban": "0.2000",
					"id": "12"
				},
				{
					"country": "Philippines",
					"population": "106512074",
					"yearlyChange": "0.0152",
					"netChange": "1593984",
					"density": "357",
					"area": "298170",
					"migrants": "-130000",
					"fert": "3.1",
					"age": "24",
					"urban": "0.4400",
					"id": "13"
				},
				{
					"country": "Egypt",
					"population": "99375741",
					"yearlyChange": "0.0187",
					"netChange": "1822590",
					"density": "100",
					"area": "995450",
					"migrants": "-55005",
					"fert": "3.4",
					"age": "25",
					"urban": "0.3800",
					"id": "14"
				},
				{
					"country": "Viet Nam",
					"population": "96491146",
					"yearlyChange": "0.0099",
					"netChange": "950346",
					"density": "311",
					"area": "310070",
					"migrants": "-40000",
					"fert": "2.0",
					"age": "30",
					"urban": "0.3400",
					"id": "15"
				},
				{
					"country": "DR Congo",
					"population": "84004989",
					"yearlyChange": "0.0328",
					"netChange": "2665001",
					"density": "37",
					"area": "2267050",
					"migrants": "3012",
					"fert": "6.4",
					"age": "17",
					"urban": "0.3900",
					"id": "16"
				},
				{
					"country": "Germany",
					"population": "82293457",
					"yearlyChange": "0.0022",
					"netChange": "179233",
					"density": "236",
					"area": "348560",
					"migrants": "355425",
					"fert": "1.4",
					"age": "46",
					"urban": "0.7600",
					"id": "17"
				},
				{
					"country": "Iran",
					"population": "82011735",
					"yearlyChange": "0.0105",
					"netChange": "848947",
					"density": "50",
					"area": "1628550",
					"migrants": "-80000",
					"fert": "1.7",
					"age": "30",
					"urban": "0.7400",
					"id": "18"
				},
				{
					"country": "Turkey",
					"population": "81916871",
					"yearlyChange": "0.0145",
					"netChange": "1171851",
					"density": "106",
					"area": "769630",
					"migrants": "325434",
					"fert": "2.1",
					"age": "30",
					"urban": "0.7100",
					"id": "19"
				},
				{
					"country": "Thailand",
					"population": "69183173",
					"yearlyChange": "0.0021",
					"netChange": "145660",
					"density": "135",
					"area": "510890",
					"migrants": "33463",
					"fert": "1.5",
					"age": "38",
					"urban": "0.5200",
					"id": "20"
				},
				{
					"country": "U.K.",
					"population": "66573504",
					"yearlyChange": "0.0059",
					"netChange": "391919",
					"density": "275",
					"area": "241930",
					"migrants": "198000",
					"fert": "1.9",
					"age": "40",
					"urban": "0.8100",
					"id": "21"
				},
				{
					"country": "France",
					"population": "65233271",
					"yearlyChange": "0.0039",
					"netChange": "253723",
					"density": "119",
					"area": "547557",
					"migrants": "72344",
					"fert": "2.0",
					"age": "41",
					"urban": "0.8000",
					"id": "22"
				},
				{
					"country": "Italy",
					"population": "59290969",
					"yearlyChange": "-0.0012",
					"netChange": "-68931",
					"density": "202",
					"area": "294140",
					"migrants": "52829",
					"fert": "1.4",
					"age": "46",
					"urban": "0.7200",
					"id": "23"
				},
				{
					"country": "Tanzania",
					"population": "59091392",
					"yearlyChange": "0.0311",
					"netChange": "1781373",
					"density": "67",
					"area": "885800",
					"migrants": "-40000",
					"fert": "5.2",
					"age": "17",
					"urban": "0.3100",
					"id": "24"
				},
				{
					"country": "South Africa",
					"population": "57398421",
					"yearlyChange": "0.0120",
					"netChange": "681265",
					"density": "47",
					"area": "1213090",
					"migrants": "161300",
					"fert": "2.6",
					"age": "26",
					"urban": "0.6200",
					"id": "25"
				}
			];

			const grid = new dhx.Grid(null, {
				columns: [
					{id: "country", header: [{text: "Country"}]},
					{id: "population", header: [{text: "Population"}]},
					{id: "yearlyChange", header: [{text: "Yearly Change"}]},
					{id: "netChange", header: [{text: "Net Change"}]},
					{id: "density", header: [{text: "Density (P/Km²)"}]},
					{id: "area", header: [{text: "Land Area (Km²)"}]},
					{id: "migrants", header: [{text: "Migrants (net)"}]},
					{id: "fert", header: [{text: "Fert. Rate"}]},
					{id: "age", header: [{text: "Med. Age"}]},
					{id: "urban", header: [{text: "Urban Pop"}]}
				],
				data: dataset,
				autoWidth: true
			});

			layout.getCell("form_cell").attach(form);
			layout.getCell("grid_cell").attach(grid);
		});
	}

}

CustomViewComponent.template = "custom_view_template";

actionRegistry.add("custom_view_action", CustomViewComponent);