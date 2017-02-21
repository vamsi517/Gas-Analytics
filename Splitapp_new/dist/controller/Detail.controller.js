sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.splitapp.controller.Detail", {


	onInit: function() {
				var oGeoMap = this.getView().byId("vbi");
				var oModel1 = new sap.ui.model.json.JSONModel();
			//	var oModel2 = this.getView.getModel("mapconfig").getJSON();
				oModel1.loadData("Mapconfig.json");
				var oMapConfig = {
					"MapProvider": [{
						"name": "HEREMAPS",
						"type": "",
						"description": "",
						"tileX": "256",
						"tileY": "256",
						"maxLOD": "20",
						"copyright": "Tiles Courtesy of HERE Maps",
						"Source": [{
							"id": "s1",
							"url": "https://1.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/reduced.day/{LOD}/{X}/{Y}/256/png8?app_id=f7HS4vzauDgO0I6uoUve&app_code=7mC9fdm5yEyqTa4bqyjqag"
						}, {
							"id": "s2",
							"url": "https://2.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/reduced.day/{LOD}/{X}/{Y}/256/png8?app_id=f7HS4vzauDgO0I6uoUve&app_code=7mC9fdm5yEyqTa4bqyjqag"
						}]
					}],
					"MapLayerStacks": [{
						"name": "DEFAULT",
						"MapLayer": {
							"name": "layer1",
							"refMapProvider": "HEREMAPS",
							"opacity": "1.0",
							"colBkgnd": "RGB(255,255,255)"
						}
					}]
				};
				oGeoMap.setMapConfiguration(oMapConfig);
				oGeoMap.setRefMapLayerStack("DEFAULT");

			}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.splitapp.view.Detail
		 */
		//	onInit: function() {
		//
		//	},
	

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.splitapp.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.splitapp.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.splitapp.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});