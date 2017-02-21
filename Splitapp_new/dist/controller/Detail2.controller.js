sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.splitapp.controller.Detail2", {

		onPress: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Detail");
		},

		onInit: function() {
			var oVizFrame = this.getView().byId("idcolumn");

			var oModel = new sap.ui.model.json.JSONModel();
			var data = {

				'Gas': [{
					"ID": 1001,
					"Gas": "O2",
					"Max": 100,
					"Current": 60

				}, {
					"ID": 1001,
					"Gas": "NO2",
					"Max": 120,
					"Current": 80
				}]
			};
			oModel.setData(data);

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({

				dimensions: [{
					name: 'Gas',
					value: "{Gas}"
				}],
				measures: [{
					name: "Max",
					value: "{Max}"
				}, {
					name: "Current",
					value: "{Current}"
				}],
				data: {
					path: "/Gas"
				}
			});
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			oVizFrame.setVizType("vertical_bullet");

			oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range()

				},
					title: {
					alignment: "center",
					font:"bold",
					visible: true,
					text: 'Gas Levels'
				}
			});

			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "valueAxis",
					'type': "Measure",
					'values': ["Current"]

				}),

				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["Gas"]
				});

			var feedTargetAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "targetValues",
				'type': "Measure",
				'values': ["Max"]

			});
			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);
			oVizFrame.addFeed(feedTargetAxis);

			var oVizFrame = this.getView().byId("idcolumn1");

			var oModel = new sap.ui.model.json.JSONModel();
			var data = {

				'GasConsum': [{
					"Month": "Jan",
					"Amount": "51000"
				}, {
					"Month": "Feb",
					"Amount": "20000"
				}, {
					"Month": "Mar",
					"Amount": "30000"
				}, {
					"Month": "April",
					"Amount": "42000"
				}, {
					"Month": "May",
					"Amount": "25000"
				}, {
					"Month": "June",
					"Amount": "61000"
				}, {
					"Month": "July",
					"Amount": "11000"
				}, {
					"Month": "Aug",
					"Amount": "36000"
				}]
			};
			oModel.setData(data);

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({

				dimensions: [{
					name: 'Month',
					value: "{Month}"
				}],
				measures: [{
					name: "Amount",
					value: "{Amount}"
				}],
				data: {
					path: "/GasConsum"
				}
			});
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			oVizFrame.setVizType("line");

			oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range()

				},
				
					title: {
					alignment: "center",
					font:"bold",
					visible: true,
					text: "Gas Consumption"
				}
				
			});

			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "valueAxis",
					'type': "Measure",
					'values': ["Amount"]

				}),

				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["Month"]
				});

			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);
		}

	});

});