/**
 * 
 * @param workItemsTrackingServices
 * @returns {{context: WebContext, getCurrentWorkItemRelations: getCurrentWorkItemRelations}}
 */
function getModel(workItemsTrackingServices) {
    var model = {
        context: VSS.getWebContext(),

        getCurrentWorkItemRelations: function() {
            // get the WorkItemFormService
            // this service allows you to get/set fields/links on the 'active' work item
            // (the work item that currently is displayed in the UI)
            return workItemsTrackingServices.WorkItemFormService.getService()
                .then(function (service) {
                    // Get the current work item relations
                    return service.getWorkItemRelations();
                })
        }
    };

    return model;
}