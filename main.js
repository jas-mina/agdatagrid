// cell renderer class
function StatusCellRenderer() {
}

// init method gets the details of the cell to be renderer
StatusCellRenderer.prototype.init = function (params) {
     var statusCodes = {
       Draft: "DRAFT",
       "In review": "INRW",
       Reviewed: "RW",
       Published: "PUB",
     };
     var statusCode = statusCodes[params.value];
     this.eGui = document.createElement("span");
    var html = "";

    if (statusCode) {
      html +=
        '<img class="flag" border="0" width="48" height="24" src="' +
        statusCode +
        '.png">';
    }
    this.eGui.innerHTML = html;
};

StatusCellRenderer.prototype.getGui = function () {
  return this.eGui;
};

var gridOptions = {
  columnDefs: [
    {
      headerName: "Reporting effort",
      field: "effort",
      rowGroup: true,
      hide: true,
    },
    //{field: "docname"},
    {
      headerName: "Status",
      field: "status",
      cellRenderer: "statusCellRenderer",
    },
    { headerName: "Days left", field: "days" },
    { headerName: "Version", field: "version" },
    { headerName: "Items", field: "items" },
    { headerName: "Size", field: "size" },
    { headerName: "Created on", field: "createdOn" },
    { headerName: "Created by", field: "createdBy" },
    { headerName: "Comments", field: "comments" },
  ],
  defaultColDef: {
    flex: 1,
    filter: true,
    sortable: true,
    resizable: true,
  },
  autoGroupColumnDef: {
    headerName: "Reporting effort",
    field: "effort",
    minWidth: 300,
    cellRenderer: "agGroupCellRenderer",
    cellRendererParams: {
      checkbox: true,
    },
  },
  components: {
    statusCellRenderer: StatusCellRenderer,
  },
  groupRowRendererParams: {
    suppressCount: true,
  },
  enableRangeSelection: true,
  animateRows: true,
  groupSelectsChildren: true,
  rowSelection: "multiple",

  // specify the data
  rowData: [
    {
      effort: "gsk0987657207601/primary-01",
      docname: "Study population -tables.pdf",
      status: "Draft",
      days: "-",
      version: "1.0",
      items: "145",
      size: "3 MB",
      createdBy: "julietaylor",
      createdOn: "15.06.20 4:15",
      comments: "-",
    },
    {
      effort: "gsk0987657207601/primary-01",
      docname: "Study population -listings.pdf",
      status: "Draft",
      days: "-",
      version: "1.0",
      items: "145",
      size: "3 MB",
      createdBy: "julietaylor",
      createdOn: "15.06.20 4:15",
      comments: "-",
    },
    {
      effort: "gsk0987657207601/primary-01",
      docname: "Study population - figures.pdf",
      status: "Draft",
      days: "-",
      version: "1.0",
      items: "145",
      size: "3 MB",
      createdBy: "julietaylor",
      createdOn: "15.06.20 4:15",
      comments: "-",
    },
    {
      effort: "gsk0987657207601/primary-01",
      docname: "Safety -tables.pdf",
      status: "Draft",
      days: "-",
      version: "1.0",
      items: "145",
      size: "3 MB",
      createdBy: "julietaylor",
      createdOn: "15.06.20 4:15",
      comments: "-",
    },
    {
      effort: "gsk0987657207589/primary-01",
      status: "In review",
      days: "2",
      version: "1.0",
      items: "145",
      size: "3 MB",
      createdBy: "julietaylor",
      createdOn: "15.06.20 4:15",
      comments: "-",
    },
    {
      effort: "gsk0987657207600/primary-01",
      status: "Reviewed",
      days: "-",
      version: "1.0",
      items: "145",
      size: "3 MB",
      createdBy: "julietaylor",
      createdOn: "15.06.20 4:15",
      comments: "-",
    },
    {
      effort: "gsk0987657207600/primary-01",
      status: "Reviewed",
      days: "-",
      version: "1.0",
      items: "145",
      size: "3 MB",
      createdBy: "julietaylor",
      createdOn: "15.06.20 4:15",
      comments: "-",
    },
    {
      effort: "gsk0987657207560/secondary-01",
      status: "Published",
      days: "-",
      version: "1.0",
      items: "98",
      size: "3 MB",
      createdBy: "julietaylor",
      createdOn: "15.06.20 4:15",
      comments: "-",
    },
    {
      effort: "gsk0987657207560/secondary-01",
      status: "Published",
      days: "-",
      version: "1.0",
      items: "98",
      size: "3 MB",
      createdBy: "julietaylor",
      createdOn: "15.06.20 4:15",
      comments: "-",
    },
  ],
};

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", function () {
  var gridDiv = document.querySelector("#publisherGrid");
  new agGrid.Grid(gridDiv, gridOptions);
});
