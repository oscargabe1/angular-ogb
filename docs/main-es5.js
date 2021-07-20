function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content-card/content-card.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/content-card/content-card.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContentCardContentCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-header\">\n        <h3 class=\"card-title\">\n            <i *ngIf=\"icon\" class=\"{{icon}} mr-1\"></i>\n            {{title}}\n        </h3>\n    </div>\n    <div class=\"card-body\">\n        <div *ngIf=\"description\" class=\"row\">\n            <p>{{description}}</p>\n        </div>\n\n        <div class=\"row\">\n            <ng-content></ng-content>\n        </div>\n        \n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-list/user-list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-list/user-list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserListUserListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"user-container\">\n    <p *ngIf=\"users.length == 0\" class=\"text-muted\">No users have been added.</p>\n    <div class=\"user-info\" *ngFor=\"let user of users; let last = last;\">\n        <h5>{{user.name}}</h5>\n        <p class=\"text-muted\">{{user.email}}</p>\n        <div *ngIf=\"user.message\">\n            <span class=\"text-muted\">Mensaje</span>\n            <p>{{user.message}}</p>\n        </div>\n        <div *ngIf=\"user.phones.length > 0\" class=\"row\">\n            <div class=\"col-2\">\n                <span>Telefonos:</span>\n            </div>\n            <div class=\"col-10\">\n                <ul>\n                    <li *ngFor=\"let phone of user.phones\">{{phone.number}}</li>\n                </ul>\n            </div>\n        </div>\n        <hr *ngIf=\"!last\">\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first/first.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first/first.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFirstFirstComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Content Wrapper. Contains page content -->\n<div class=\"content-wrapper\">\n    <!-- Content Header (Page header) -->\n    <div class=\"content-header\">\n      <div class=\"container-fluid\">\n        <div class=\"row mb-2\">\n          <div class=\"col-sm-6\">\n            <h1 class=\"m-0\">Dashboard</h1>\n          </div><!-- /.col -->\n          <div class=\"col-sm-6\">\n            <ol class=\"breadcrumb float-sm-right\">\n              <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n              <li class=\"breadcrumb-item active\">Dashboard v1</li>\n            </ol>\n          </div><!-- /.col -->\n        </div><!-- /.row -->\n      </div><!-- /.container-fluid -->\n    </div>\n    <!-- /.content-header -->\n\n    <!-- Main content -->\n    <section class=\"content\">\n      <div class=\"container-fluid\">\n        <!-- Small boxes (Stat box) -->\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-6\">\n            <!-- small box -->\n            <div class=\"small-box bg-info\">\n              <div class=\"inner\">\n                <h3>150</h3>\n\n                <p>New Orders</p>\n              </div>\n              <div class=\"icon\">\n                <i class=\"ion ion-bag\"></i>\n              </div>\n              <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\n            </div>\n          </div>\n          <!-- ./col -->\n          <div class=\"col-lg-3 col-6\">\n            <!-- small box -->\n            <div class=\"small-box bg-success\">\n              <div class=\"inner\">\n                <h3>53<sup style=\"font-size: 20px\">%</sup></h3>\n\n                <p>Bounce Rate</p>\n              </div>\n              <div class=\"icon\">\n                <i class=\"ion ion-stats-bars\"></i>\n              </div>\n              <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\n            </div>\n          </div>\n          <!-- ./col -->\n          <div class=\"col-lg-3 col-6\">\n            <!-- small box -->\n            <div class=\"small-box bg-warning\">\n              <div class=\"inner\">\n                <h3>44</h3>\n\n                <p>User Registrations</p>\n              </div>\n              <div class=\"icon\">\n                <i class=\"ion ion-person-add\"></i>\n              </div>\n              <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\n            </div>\n          </div>\n          <!-- ./col -->\n          <div class=\"col-lg-3 col-6\">\n            <!-- small box -->\n            <div class=\"small-box bg-danger\">\n              <div class=\"inner\">\n                <h3>65</h3>\n\n                <p>Unique Visitors</p>\n              </div>\n              <div class=\"icon\">\n                <i class=\"ion ion-pie-graph\"></i>\n              </div>\n              <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\n            </div>\n          </div>\n          <!-- ./col -->\n        </div>\n        <!-- /.row -->\n        <!-- Main row -->\n        <div class=\"row\">\n          <!-- Left col -->\n          <section class=\"col-lg-7 connectedSortable\">\n            <!-- Custom tabs (Charts with tabs)-->\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <h3 class=\"card-title\">\n                  <i class=\"fas fa-chart-pie mr-1\"></i>\n                  Sales\n                </h3>\n                <div class=\"card-tools\">\n                  <ul class=\"nav nav-pills ml-auto\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link active\" href=\"#revenue-chart\" data-toggle=\"tab\">Area</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#sales-chart\" data-toggle=\"tab\">Donut</a>\n                    </li>\n                  </ul>\n                </div>\n              </div><!-- /.card-header -->\n              <div class=\"card-body\">\n                <div class=\"tab-content p-0\">\n                  <!-- Morris chart - Sales -->\n                  <div class=\"chart tab-pane active\" id=\"revenue-chart\"\n                       style=\"position: relative; height: 300px;\">\n                      <canvas id=\"revenue-chart-canvas\" height=\"300\" style=\"height: 300px;\"></canvas>\n                   </div>\n                  <div class=\"chart tab-pane\" id=\"sales-chart\" style=\"position: relative; height: 300px;\">\n                    <canvas id=\"sales-chart-canvas\" height=\"300\" style=\"height: 300px;\"></canvas>\n                  </div>\n                </div>\n              </div><!-- /.card-body -->\n            </div>\n            <!-- /.card -->\n\n            <!-- DIRECT CHAT -->\n            <div class=\"card direct-chat direct-chat-primary\">\n              <div class=\"card-header\">\n                <h3 class=\"card-title\">Direct Chat</h3>\n\n                <div class=\"card-tools\">\n                  <span title=\"3 New Messages\" class=\"badge badge-primary\">3</span>\n                  <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\">\n                    <i class=\"fas fa-minus\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-tool\" title=\"Contacts\" data-widget=\"chat-pane-toggle\">\n                    <i class=\"fas fa-comments\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"remove\">\n                    <i class=\"fas fa-times\"></i>\n                  </button>\n                </div>\n              </div>\n              <!-- /.card-header -->\n              <div class=\"card-body\">\n                <!-- Conversations are loaded here -->\n                <div class=\"direct-chat-messages\">\n                  <!-- Message. Default to the left -->\n                  <div class=\"direct-chat-msg\">\n                    <div class=\"direct-chat-infos clearfix\">\n                      <span class=\"direct-chat-name float-left\">Alexander Pierce</span>\n                      <span class=\"direct-chat-timestamp float-right\">23 Jan 2:00 pm</span>\n                    </div>\n                    <!-- /.direct-chat-infos -->\n                    <img class=\"direct-chat-img\" src=\"dist/img/user1-128x128.jpg\" alt=\"message user image\">\n                    <!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                      Is this template really for free? That's unbelievable!\n                    </div>\n                    <!-- /.direct-chat-text -->\n                  </div>\n                  <!-- /.direct-chat-msg -->\n\n                  <!-- Message to the right -->\n                  <div class=\"direct-chat-msg right\">\n                    <div class=\"direct-chat-infos clearfix\">\n                      <span class=\"direct-chat-name float-right\">Sarah Bullock</span>\n                      <span class=\"direct-chat-timestamp float-left\">23 Jan 2:05 pm</span>\n                    </div>\n                    <!-- /.direct-chat-infos -->\n                    <img class=\"direct-chat-img\" src=\"dist/img/user3-128x128.jpg\" alt=\"message user image\">\n                    <!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                      You better believe it!\n                    </div>\n                    <!-- /.direct-chat-text -->\n                  </div>\n                  <!-- /.direct-chat-msg -->\n\n                  <!-- Message. Default to the left -->\n                  <div class=\"direct-chat-msg\">\n                    <div class=\"direct-chat-infos clearfix\">\n                      <span class=\"direct-chat-name float-left\">Alexander Pierce</span>\n                      <span class=\"direct-chat-timestamp float-right\">23 Jan 5:37 pm</span>\n                    </div>\n                    <!-- /.direct-chat-infos -->\n                    <img class=\"direct-chat-img\" src=\"dist/img/user1-128x128.jpg\" alt=\"message user image\">\n                    <!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                      Working with AdminLTE on a great new app! Wanna join?\n                    </div>\n                    <!-- /.direct-chat-text -->\n                  </div>\n                  <!-- /.direct-chat-msg -->\n\n                  <!-- Message to the right -->\n                  <div class=\"direct-chat-msg right\">\n                    <div class=\"direct-chat-infos clearfix\">\n                      <span class=\"direct-chat-name float-right\">Sarah Bullock</span>\n                      <span class=\"direct-chat-timestamp float-left\">23 Jan 6:10 pm</span>\n                    </div>\n                    <!-- /.direct-chat-infos -->\n                    <img class=\"direct-chat-img\" src=\"dist/img/user3-128x128.jpg\" alt=\"message user image\">\n                    <!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                      I would love to.\n                    </div>\n                    <!-- /.direct-chat-text -->\n                  </div>\n                  <!-- /.direct-chat-msg -->\n\n                </div>\n                <!--/.direct-chat-messages-->\n\n                <!-- Contacts are loaded here -->\n                <div class=\"direct-chat-contacts\">\n                  <ul class=\"contacts-list\">\n                    <li>\n                      <a href=\"#\">\n                        <img class=\"contacts-list-img\" src=\"dist/img/user1-128x128.jpg\" alt=\"User Avatar\">\n\n                        <div class=\"contacts-list-info\">\n                          <span class=\"contacts-list-name\">\n                            Count Dracula\n                            <small class=\"contacts-list-date float-right\">2/28/2015</small>\n                          </span>\n                          <span class=\"contacts-list-msg\">How have you been? I was...</span>\n                        </div>\n                        <!-- /.contacts-list-info -->\n                      </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                        <img class=\"contacts-list-img\" src=\"dist/img/user7-128x128.jpg\" alt=\"User Avatar\">\n\n                        <div class=\"contacts-list-info\">\n                          <span class=\"contacts-list-name\">\n                            Sarah Doe\n                            <small class=\"contacts-list-date float-right\">2/23/2015</small>\n                          </span>\n                          <span class=\"contacts-list-msg\">I will be waiting for...</span>\n                        </div>\n                        <!-- /.contacts-list-info -->\n                      </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                        <img class=\"contacts-list-img\" src=\"dist/img/user3-128x128.jpg\" alt=\"User Avatar\">\n\n                        <div class=\"contacts-list-info\">\n                          <span class=\"contacts-list-name\">\n                            Nadia Jolie\n                            <small class=\"contacts-list-date float-right\">2/20/2015</small>\n                          </span>\n                          <span class=\"contacts-list-msg\">I'll call you back at...</span>\n                        </div>\n                        <!-- /.contacts-list-info -->\n                      </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                        <img class=\"contacts-list-img\" src=\"dist/img/user5-128x128.jpg\" alt=\"User Avatar\">\n\n                        <div class=\"contacts-list-info\">\n                          <span class=\"contacts-list-name\">\n                            Nora S. Vans\n                            <small class=\"contacts-list-date float-right\">2/10/2015</small>\n                          </span>\n                          <span class=\"contacts-list-msg\">Where is your new...</span>\n                        </div>\n                        <!-- /.contacts-list-info -->\n                      </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                        <img class=\"contacts-list-img\" src=\"dist/img/user6-128x128.jpg\" alt=\"User Avatar\">\n\n                        <div class=\"contacts-list-info\">\n                          <span class=\"contacts-list-name\">\n                            John K.\n                            <small class=\"contacts-list-date float-right\">1/27/2015</small>\n                          </span>\n                          <span class=\"contacts-list-msg\">Can I take a look at...</span>\n                        </div>\n                        <!-- /.contacts-list-info -->\n                      </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                        <img class=\"contacts-list-img\" src=\"dist/img/user8-128x128.jpg\" alt=\"User Avatar\">\n\n                        <div class=\"contacts-list-info\">\n                          <span class=\"contacts-list-name\">\n                            Kenneth M.\n                            <small class=\"contacts-list-date float-right\">1/4/2015</small>\n                          </span>\n                          <span class=\"contacts-list-msg\">Never mind I found...</span>\n                        </div>\n                        <!-- /.contacts-list-info -->\n                      </a>\n                    </li>\n                    <!-- End Contact Item -->\n                  </ul>\n                  <!-- /.contacts-list -->\n                </div>\n                <!-- /.direct-chat-pane -->\n              </div>\n              <!-- /.card-body -->\n              <div class=\"card-footer\">\n                <form action=\"#\" method=\"post\">\n                  <div class=\"input-group\">\n                    <input type=\"text\" name=\"message\" placeholder=\"Type Message ...\" class=\"form-control\">\n                    <span class=\"input-group-append\">\n                      <button type=\"button\" class=\"btn btn-primary\">Send</button>\n                    </span>\n                  </div>\n                </form>\n              </div>\n              <!-- /.card-footer-->\n            </div>\n            <!--/.direct-chat -->\n\n            <!-- TO DO List -->\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <h3 class=\"card-title\">\n                  <i class=\"ion ion-clipboard mr-1\"></i>\n                  To Do List\n                </h3>\n\n                <div class=\"card-tools\">\n                  <ul class=\"pagination pagination-sm\">\n                    <li class=\"page-item\"><a href=\"#\" class=\"page-link\">&laquo;</a></li>\n                    <li class=\"page-item\"><a href=\"#\" class=\"page-link\">1</a></li>\n                    <li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li>\n                    <li class=\"page-item\"><a href=\"#\" class=\"page-link\">3</a></li>\n                    <li class=\"page-item\"><a href=\"#\" class=\"page-link\">&raquo;</a></li>\n                  </ul>\n                </div>\n              </div>\n              <!-- /.card-header -->\n              <div class=\"card-body\">\n                <ul class=\"todo-list\" data-widget=\"todo-list\">\n                  <li>\n                    <!-- drag handle -->\n                    <span class=\"handle\">\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </span>\n                    <!-- checkbox -->\n                    <div  class=\"icheck-primary d-inline ml-2\">\n                      <input type=\"checkbox\" value=\"\" name=\"todo1\" id=\"todoCheck1\">\n                      <label for=\"todoCheck1\"></label>\n                    </div>\n                    <!-- todo text -->\n                    <span class=\"text\">Design a nice theme</span>\n                    <!-- Emphasis label -->\n                    <small class=\"badge badge-danger\"><i class=\"far fa-clock\"></i> 2 mins</small>\n                    <!-- General tools such as edit or delete-->\n                    <div class=\"tools\">\n                      <i class=\"fas fa-edit\"></i>\n                      <i class=\"fas fa-trash-o\"></i>\n                    </div>\n                  </li>\n                  <li>\n                    <span class=\"handle\">\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </span>\n                    <div  class=\"icheck-primary d-inline ml-2\">\n                      <input type=\"checkbox\" value=\"\" name=\"todo2\" id=\"todoCheck2\" checked>\n                      <label for=\"todoCheck2\"></label>\n                    </div>\n                    <span class=\"text\">Make the theme responsive</span>\n                    <small class=\"badge badge-info\"><i class=\"far fa-clock\"></i> 4 hours</small>\n                    <div class=\"tools\">\n                      <i class=\"fas fa-edit\"></i>\n                      <i class=\"fas fa-trash-o\"></i>\n                    </div>\n                  </li>\n                  <li>\n                    <span class=\"handle\">\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </span>\n                    <div  class=\"icheck-primary d-inline ml-2\">\n                      <input type=\"checkbox\" value=\"\" name=\"todo3\" id=\"todoCheck3\">\n                      <label for=\"todoCheck3\"></label>\n                    </div>\n                    <span class=\"text\">Let theme shine like a star</span>\n                    <small class=\"badge badge-warning\"><i class=\"far fa-clock\"></i> 1 day</small>\n                    <div class=\"tools\">\n                      <i class=\"fas fa-edit\"></i>\n                      <i class=\"fas fa-trash-o\"></i>\n                    </div>\n                  </li>\n                  <li>\n                    <span class=\"handle\">\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </span>\n                    <div  class=\"icheck-primary d-inline ml-2\">\n                      <input type=\"checkbox\" value=\"\" name=\"todo4\" id=\"todoCheck4\">\n                      <label for=\"todoCheck4\"></label>\n                    </div>\n                    <span class=\"text\">Let theme shine like a star</span>\n                    <small class=\"badge badge-success\"><i class=\"far fa-clock\"></i> 3 days</small>\n                    <div class=\"tools\">\n                      <i class=\"fas fa-edit\"></i>\n                      <i class=\"fas fa-trash-o\"></i>\n                    </div>\n                  </li>\n                  <li>\n                    <span class=\"handle\">\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </span>\n                    <div  class=\"icheck-primary d-inline ml-2\">\n                      <input type=\"checkbox\" value=\"\" name=\"todo5\" id=\"todoCheck5\">\n                      <label for=\"todoCheck5\"></label>\n                    </div>\n                    <span class=\"text\">Check your messages and notifications</span>\n                    <small class=\"badge badge-primary\"><i class=\"far fa-clock\"></i> 1 week</small>\n                    <div class=\"tools\">\n                      <i class=\"fas fa-edit\"></i>\n                      <i class=\"fas fa-trash-o\"></i>\n                    </div>\n                  </li>\n                  <li>\n                    <span class=\"handle\">\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </span>\n                    <div  class=\"icheck-primary d-inline ml-2\">\n                      <input type=\"checkbox\" value=\"\" name=\"todo6\" id=\"todoCheck6\">\n                      <label for=\"todoCheck6\"></label>\n                    </div>\n                    <span class=\"text\">Let theme shine like a star</span>\n                    <small class=\"badge badge-secondary\"><i class=\"far fa-clock\"></i> 1 month</small>\n                    <div class=\"tools\">\n                      <i class=\"fas fa-edit\"></i>\n                      <i class=\"fas fa-trash-o\"></i>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n              <!-- /.card-body -->\n              <div class=\"card-footer clearfix\">\n                <button type=\"button\" class=\"btn btn-primary float-right\"><i class=\"fas fa-plus\"></i> Add item</button>\n              </div>\n            </div>\n            <!-- /.card -->\n          </section>\n          <!-- /.Left col -->\n          <!-- right col (We are only adding the ID to make the widgets sortable)-->\n          <section class=\"col-lg-5 connectedSortable\">\n\n            <!-- Map card -->\n            <div class=\"card bg-gradient-primary\">\n              <div class=\"card-header border-0\">\n                <h3 class=\"card-title\">\n                  <i class=\"fas fa-map-marker-alt mr-1\"></i>\n                  Visitors\n                </h3>\n                <!-- card tools -->\n                <div class=\"card-tools\">\n                  <button type=\"button\" class=\"btn btn-primary btn-sm daterange\" title=\"Date range\">\n                    <i class=\"far fa-calendar-alt\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-primary btn-sm\" data-card-widget=\"collapse\" title=\"Collapse\">\n                    <i class=\"fas fa-minus\"></i>\n                  </button>\n                </div>\n                <!-- /.card-tools -->\n              </div>\n              <div class=\"card-body\">\n                <div id=\"world-map\" style=\"height: 250px; width: 100%;\"></div>\n              </div>\n              <!-- /.card-body-->\n              <div class=\"card-footer bg-transparent\">\n                <div class=\"row\">\n                  <div class=\"col-4 text-center\">\n                    <div id=\"sparkline-1\"></div>\n                    <div class=\"text-white\">Visitors</div>\n                  </div>\n                  <!-- ./col -->\n                  <div class=\"col-4 text-center\">\n                    <div id=\"sparkline-2\"></div>\n                    <div class=\"text-white\">Online</div>\n                  </div>\n                  <!-- ./col -->\n                  <div class=\"col-4 text-center\">\n                    <div id=\"sparkline-3\"></div>\n                    <div class=\"text-white\">Sales</div>\n                  </div>\n                  <!-- ./col -->\n                </div>\n                <!-- /.row -->\n              </div>\n            </div>\n            <!-- /.card -->\n\n            <!-- solid sales graph -->\n            <div class=\"card bg-gradient-info\">\n              <div class=\"card-header border-0\">\n                <h3 class=\"card-title\">\n                  <i class=\"fas fa-th mr-1\"></i>\n                  Sales Graph\n                </h3>\n\n                <div class=\"card-tools\">\n                  <button type=\"button\" class=\"btn bg-info btn-sm\" data-card-widget=\"collapse\">\n                    <i class=\"fas fa-minus\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn bg-info btn-sm\" data-card-widget=\"remove\">\n                    <i class=\"fas fa-times\"></i>\n                  </button>\n                </div>\n              </div>\n              <div class=\"card-body\">\n                <canvas class=\"chart\" id=\"line-chart\" style=\"min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;\"></canvas>\n              </div>\n              <!-- /.card-body -->\n              <div class=\"card-footer bg-transparent\">\n                <div class=\"row\">\n                  <div class=\"col-4 text-center\">\n                    <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"20\" data-width=\"60\" data-height=\"60\"\n                           data-fgColor=\"#39CCCC\">\n\n                    <div class=\"text-white\">Mail-Orders</div>\n                  </div>\n                  <!-- ./col -->\n                  <div class=\"col-4 text-center\">\n                    <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"50\" data-width=\"60\" data-height=\"60\"\n                           data-fgColor=\"#39CCCC\">\n\n                    <div class=\"text-white\">Online</div>\n                  </div>\n                  <!-- ./col -->\n                  <div class=\"col-4 text-center\">\n                    <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"30\" data-width=\"60\" data-height=\"60\"\n                           data-fgColor=\"#39CCCC\">\n\n                    <div class=\"text-white\">In-Store</div>\n                  </div>\n                  <!-- ./col -->\n                </div>\n                <!-- /.row -->\n              </div>\n              <!-- /.card-footer -->\n            </div>\n            <!-- /.card -->\n\n            <!-- Calendar -->\n            <div class=\"card bg-gradient-success\">\n              <div class=\"card-header border-0\">\n\n                <h3 class=\"card-title\">\n                  <i class=\"far fa-calendar-alt\"></i>\n                  Calendar\n                </h3>\n                <!-- tools card -->\n                <div class=\"card-tools\">\n                  <!-- button with a dropdown -->\n                  <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-success btn-sm dropdown-toggle\" data-toggle=\"dropdown\" data-offset=\"-52\">\n                      <i class=\"fas fa-bars\"></i>\n                    </button>\n                    <div class=\"dropdown-menu\" role=\"menu\">\n                      <a href=\"#\" class=\"dropdown-item\">Add new event</a>\n                      <a href=\"#\" class=\"dropdown-item\">Clear events</a>\n                      <div class=\"dropdown-divider\"></div>\n                      <a href=\"#\" class=\"dropdown-item\">View calendar</a>\n                    </div>\n                  </div>\n                  <button type=\"button\" class=\"btn btn-success btn-sm\" data-card-widget=\"collapse\">\n                    <i class=\"fas fa-minus\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-success btn-sm\" data-card-widget=\"remove\">\n                    <i class=\"fas fa-times\"></i>\n                  </button>\n                </div>\n                <!-- /. tools -->\n              </div>\n              <!-- /.card-header -->\n              <div class=\"card-body pt-0\">\n                <!--The calendar -->\n                <div id=\"calendar\" style=\"width: 100%\"></div>\n              </div>\n              <!-- /.card-body -->\n            </div>\n            <!-- /.card -->\n          </section>\n          <!-- right col -->\n        </div>\n        <!-- /.row (main row) -->\n      </div><!-- /.container-fluid -->\n    </section>\n    <!-- /.content -->\n  </div>\n  <!-- /.content-wrapper -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/forms.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/forms.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFormsFormsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\n\n    <div class=\"content-header\">\n      <div class=\"container-fluid\">\n        <div class=\"row mb-2\">\n          <div class=\"col-sm-6\">\n            <h1 class=\"m-0\">Forms</h1>\n          </div>\n          <div class=\"col-sm-6\">\n            <ol class=\"breadcrumb float-sm-right\">\n              <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard/first']\">Home</a></li>\n              <li class=\"breadcrumb-item active\">Forms</li>\n            </ol>\n          </div>\n        </div>\n      </div>\n    </div>\n      \n    <section class=\"content\">\n      <div class=\"container-fluid\">\n\n        <h5 class=\"mb-3\">Reactive Forms</h5>\n\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <h3 class=\"card-title\">\n                    <i class=\"far fa-check-square mr-1\"></i>\n                    Example Form\n                </h3>\n              </div>\n              <form method=\"post\"\n                      autocomplete=\"off\"\n                      [formGroup]=\"reactiveForm\"\n                      (ngSubmit)=\"postForm()\"\n                      (keydown.enter)=\"$event.preventDefault()\">\n  \n                <div class=\"card-body\">\n                  <div class=\"form-group\">\n                    <mat-form-field class=\"example-full-width col-12\">\n                      <mat-label>Name</mat-label>\n                      <input type=\"text\" matInput [class.is-invalid]=\"name.invalid && formSubmitted\" id=\"name\" placeholder=\"Enter name\" formControlName=\"name\" maxlength=\"30\">\n                      <mat-error *ngIf=\"name.errors && name.hasError('required')\" class=\"invalid-feedback\">\n                        This field is required.\n                      </mat-error>\n                      <mat-error *ngIf=\"name.errors && name.hasError('minlength')\" class=\"invalid-feedback\">\n                        Must be at least 3 characters long.\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n  \n\n                  <div class=\"form-group\">\n                    <mat-form-field class=\"example-full-width col-12\">\n                      <mat-label>Email</mat-label>\n                      <input type=\"email\" matInput [class.is-invalid]=\"email.invalid && formSubmitted\" id=\"email\" placeholder=\"Enter email\" formControlName=\"email\" maxlength=\"30\">\n                      <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\n                      <mat-error *ngIf=\"email.errors && email.hasError('email')\" class=\"invalid-feedback\">\n                        Please enter a valid email address.\n                      </mat-error>\n                      <mat-error *ngIf=\"email.errors && email.hasError('required')\" class=\"invalid-feedback\">\n                        This field is required.\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n  \n                  <div class=\"form-group\">\n                    <mat-form-field class=\"example-full-width col-12\">\n                      <mat-label>Password</mat-label>\n                      <input type=\"{{ showPassword ? 'text' : 'password'}}\" matInput [class.is-invalid]=\"password.invalid && formSubmitted\" id=\"password\" placeholder=\"Enter password\" formControlName=\"password\" maxlength=\"30\">\n                      <mat-error *ngIf=\"password.errors && password.hasError('required')\" class=\"invalid-feedback\">\n                        This field is required.\n                      </mat-error>\n                      <mat-error *ngIf=\"password.errors && password.hasError('pattern')\" class=\"invalid-feedback\">\n                        Must contain at least one uppercase letter, one lowecase letter, one number and one special character.\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n  \n                  <div class=\"form-group\">\n                    <mat-form-field class=\"example-full-width col-12\">\n                      <mat-label>Confirm Password</mat-label>\n                      <input type=\"{{ showPassword ? 'text' : 'password' }}\" matInput [class.is-invalid]=\"passwordConfirm.invalid && formSubmitted\" id=\"passwordConfirm\" placeholder=\"Confirm password\" formControlName=\"passwordConfirm\" maxlength=\"30\">\n                      <mat-error *ngIf=\"passwordConfirm.errors && passwordConfirm.hasError('required')\" class=\"invalid-feedback\">\n                        This field is required.\n                      </mat-error>\n                      <mat-error *ngIf=\"passwordConfirm.errors && passwordConfirm.hasError('notMatching')\" class=\"invalid-feedback\">\n                        Password not matching.\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n\n                  <mat-checkbox (change)=\"changeShowPassword()\" color=\"primary\" class=\"example-margin\">Show password</mat-checkbox>\n  \n                  <hr>\n\n                  <p>Additional Information</p>\n\n                  <div class=\"form-group\">\n                    <mat-form-field class=\"example-full-width col-12\">\n                      <mat-label>Message</mat-label>\n                      <textarea matInput placeholder=\"Your message...\" formControlName=\"message\" maxlength=\"100\"></textarea>\n                    </mat-form-field>\n                  </div>\n\n                  <div formArrayName=\"phones\">\n                    <div *ngFor=\"let phone of phonesForm.controls; let i = index\" [formGroupName]=\"i\">\n                      \n                      <div class=\"form-group\">\n                          <mat-form-field class=\"example-full-width col-md-10 col-xs-6\">\n                            <input matInput placeholder=\"Phone number\" type=\"text\" formControlName=\"number\">\n                          </mat-form-field>\n                            <button type=\"button\" class=\"mt-2\" mat-flat-button color=\"warn\" (click)=\"deletePhone(i)\">Delete</button>\n                      </div>\n  \n\n                    </div>\n\n                    <button type=\"button\" mat-flat-button color=\"light\" (click)=\"addPhone()\">Add phone</button>\n\n                  </div>\n\n                  <hr>\n                  <br>\n\n                  <mat-checkbox formControlName=\"agree\" color=\"primary\" class=\"example-margin\">I agree to terms of service.</mat-checkbox>\n                  <mat-error *ngIf=\"agree.hasError('required') && formSubmitted\" class=\"invalid-feedback\">\n                    We need you to agree to this.\n                  </mat-error>\n\n\n  \n    \n                </div>\n  \n                <div class=\"card-footer clearfix\">\n                  <button type=\"submit\" [disabled]=\"reactiveForm.invalid\" class=\"float-right\" mat-flat-button color=\"primary\">Save</button>\n                </div>\n              </form>\n  \n            </div>\n          </div>\n  \n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <h3 class=\"card-title\">\n                  <i class=\"fa fa-user mr-1\"></i>\n                  User List\n                </h3>\n              </div>\n              <div class=\"card-body\">\n                <app-user-list></app-user-list>\n              </div>\n              <div class=\"card-footer clearfix\">\n                <p>Users will be stored in a user-service and passed to the user-list component via an Observable.</p>\n              </div>\n            </div>\n            \n          </div>\n        </div>\n\n        \n\n          \n  \n      </div>\n    </section>\n  \n    \n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<app-sidebar></app-sidebar>\n\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pipes/pipes.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pipes/pipes.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPipesPipesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\n\n  <div class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1 class=\"m-0\">Pipes</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard/first']\">Home</a></li>\n            <li class=\"breadcrumb-item active\">Pipes</li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n    \n  <section class=\"content\">\n    <div class=\"container-fluid\">\n      <h5 class=\"mb-3\">Built-In Pipes</h5>\n        <div class=\"row\">\n\n          <div class=\"col-md-4 col-sm-12\">\n            <app-content-card [title]=\"'Date Pipe'\" [icon]=\"'fa fa-calendar'\"\n                        [description]=\"'Used to transform a new Date() instance into different formats.'\">\n              <ul>\n                <li ngNonBindable>{{dateVal | date}}</li>\n                <li>{{dateVal | date}}</li>\n                <hr>\n                <li ngNonBindable>{{dateVal | date:'short'}}</li>\n                <li>{{dateVal | date:'short'}}</li>\n              </ul>\n              <span>Documentation: <a href=\"https://angular.io/api/common/DatePipe\" target=\"_blank\">https://angular.io/api/common/DatePipe</a></span>\n            </app-content-card>\n          </div>\n\n          <div class=\"col-md-4 col-sm-12\">\n            <app-content-card [title]=\"'Currency Pipe'\" [icon]=\"'fas fa-dollar-sign'\"\n                        [description]=\"'Used for currency formatting, the first argument is the abbreviation of the currency, the second (optional) is the way you want to display the currency.'\">\n              <ul>\n                <li ngNonBindable>{{1234 | currency:'EUR'}}</li>\n                <li>{{1234 | currency:'EUR'}}</li>\n                <hr>\n                <li ngNonBindable>{{1234 | currency:'USD':'code'}}</li>\n                <li>{{1234 | currency:'USD':'code'}}</li>\n              </ul>\n            </app-content-card>\n          </div>\n          \n          <div class=\"col-md-4 col-sm-12\">\n            <app-content-card [title]=\"'Decimal Pipe'\" [icon]=\"'fa fa-ellipsis-h'\"\n                        [description]=\"'Used to transform decimal numbers. The first argument is a format string of the form {minIntegerDigits}. {minFractionDigits}-{maxFractionDigits}'\">\n              <ul>\n                <li ngNonBindable>{{ 3.14159265 | number: '3.1-2' }}</li>\n                <li>{{ 3.14159265 | number: '3.1-2' }}</li>\n                <hr>\n                <li ngNonBindable>{{ 3.14159265 | number: '1.4-4' }}</li> \n                <li>{{ 3.14159265 | number: '1.4-4' }}</li>\n              </ul>\n            </app-content-card>\n          </div>\n          \n          <div class=\"col-md-4 col-sm-12\">\n            <app-content-card [title]=\"'JSON Pipe'\" [icon]=\"'fab fa-js'\"\n                        [description]=\"'Transforms JSON object into a string.'\">\n              <ul>\n                <li ngNonBindable>{{ jsonObj }}</li>\n                <li>{{ jsonObj }} <small>(no pipe)</small></li>\n                <hr>\n                <li ngNonBindable>{{ jsonObj | json }}</li>\n                <li>{{ jsonObj | json }}</li>\n              </ul>\n            </app-content-card>\n          </div>\n\n          <div class=\"col-md-4 col-sm-12\">\n            <app-content-card [title]=\"'LowerCase Pipe'\" [icon]=\"'fas fa-caret-down'\"\n                        [description]=\"'Transforms string into all lowercase.'\">\n              <ul>\n                <li ngNonBindable>{{ 'Hello World' | lowercase }}</li>\n                <li>{{ 'Hello World' | lowercase }}</li>\n              </ul>\n            </app-content-card>\n          </div>\n  \n          <div class=\"col-md-4 col-sm-12\">\n            <app-content-card [title]=\"'UpperCase Pipe'\" [icon]=\"'fas fa-caret-up'\"\n                        [description]=\"'Transforms string into all uppercase.'\">\n              <ul>\n                <li ngNonBindable>{{ 'Hello World' | upperrcase }}</li>\n                <li>{{ 'Hello World' | uppercase }}</li>\n              </ul>\n            </app-content-card>\n          </div>\n\n          <div class=\"col-md-4 col-sm-12\">\n            <app-content-card [title]=\"'Async Pipe'\" [icon]=\"'fas fa-caret-down'\"\n                        [description]=\"'Waits for an async function to return a value and then assigns it to the tag with the pipe.'\">\n              <ul>\n                <li ngNonBindable>{{ asyncValue | async }}</li>\n                <li>{{ asyncValue | async }}</li>\n              </ul>\n            </app-content-card>\n          </div>\n\n        </div>\n        <span><a href=\"https://angular.io/api?type=pipe\" taget=\"_blank\">More Pipes</a></span>\n\n        <h5 class=\"mt-4 mb-3\">Creating Custom Pipes</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-12\">\n            <app-content-card [title]=\"'Instructions'\" [icon]=\"'fa fa-list'\"\n                          [description]=\"'A custom pipe can transform a value to whatever you want or need. To create one follow these instructions.'\">\n                <ul>\n                  <li>Create a 'pipes' folder in your 'app' folder.</li>\n                  <li>In the folder add a pipes-module that's gonna have your custom pipe in declarations and in exports.</li>\n                  <li>Create your custom pipe, declare a name and instructions to transform your value, you can also add parameters.</li>\n                </ul>\n                <p>It should look look like this:</p>\n                <img class=\"overflow-hidden\" src=\"https://i.imgur.com/isfix8g.png\" alt=\"Imgur image\">\n              </app-content-card>\n          </div>\n          \n          <div class=\"col-md-6 col-sm-12\">\n            <app-content-card [title]=\"'Using the InvestmentReturn Custom Pipe'\" [icon]=\"'fab fa-pied-piper-alt'\"\n                          [description]=\"'This custom pipe takes an amount of money (number) and returns the amount that an investment of that money would be. It takes into account the annual rate, the number of days the money will be invested and the taxes. These parameters can be set when using the pipe.'\">\n                <ul>\n                  <li ngNonBindable>{{100000 | investmentReturn}} <small>If parameters are not set, default ammounts will be used.</small></li>\n                  <li>{{100000 | investmentReturn}}</li>\n                  <hr>\n                  <li ngNonBindable>{{100000 | investmentReturn: '<strong>rate</strong>':'<strong>days</strong>':'<strong>taxes</strong>'}}</li> \n                  <li ngNonBindable>{{100000 | investmentReturn: '7':'40':'2'}}</li>\n                  <!-- <li>{{100000 | investmentReturn: '7':'40':'2'}}</li> -->\n                </ul>\n              </app-content-card>\n          </div>\n\n        </div>\n\n\n\n        \n\n    </div>\n  </section>\n\n  \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/data-table/data-table.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/data-table/data-table.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTablesDataTableDataTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\n\n    <div class=\"content-header\">\n      <div class=\"container-fluid\">\n        <div class=\"row mb-2\">\n          <div class=\"col-sm-6\">\n            <h1 class=\"m-0\">Regular Table</h1>\n          </div>\n          <div class=\"col-sm-6\">\n            <ol class=\"breadcrumb float-sm-right\">\n              <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard/first']\">Home</a></li>\n              <li class=\"breadcrumb-item active\">Tables</li>\n            </ol>\n          </div>\n        </div>\n      </div>\n    </div>\n      \n    <section class=\"content\">\n      <div class=\"container-fluid\">\n        <h5 class=\"mb-3\">Example</h5>\n          <div class=\"row\">\n  \n            <div class=\"col-md-12 col-sm-12\">\n              <app-content-card [title]=\"'Employees'\">\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\">ID</th>\n                      <th scope=\"col\">Avatar</th>\n                      <th scope=\"col\">Name</th>\n                      <th scope=\"col\">Email</th>\n                      <th scope=\"col\">Phone No.</th>\n                      <th scope=\"col\">Location</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let employee of employees\">\n                      <th scope=\"row\">{{employee.id}}</th>\n                      <td>\n                        <img class=\"og-avatar\" src=\"{{employee.img}}\" alt=\"\">\n                        \n                      </td>\n                      <td>{{employee.name}}</td>\n                      <td>{{employee.email}}</td>\n                      <td>{{employee.phone}}</td>\n                      <td>{{employee.address}}</td>\n                    </tr>\n                 \n                  </tbody>\n                </table>\n              </app-content-card>\n              \n            </div>\n  \n      \n  \n          </div>\n\n  \n          \n  \n      </div>\n    </section>\n  \n    \n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/mat-table/mat-table.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/mat-table/mat-table.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTablesMatTableMatTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\n\n    <div class=\"content-header\">\n      <div class=\"container-fluid\">\n        <div class=\"row mb-2\">\n          <div class=\"col-sm-6\">\n            <h1 class=\"m-0\">Angular Mat-Table</h1>\n          </div>\n          <div class=\"col-sm-6\">\n            <ol class=\"breadcrumb float-sm-right\">\n              <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard/first']\">Home</a></li>\n              <li class=\"breadcrumb-item active\">Tables</li>\n            </ol>\n          </div>\n        </div>\n      </div>\n    </div>\n      \n    <section class=\"content\">\n      <div class=\"container-fluid\">\n        <h5 class=\"mb-3\">Example</h5>\n          <div class=\"row\">\n  \n            <div class=\"col-md-12 col-sm-12\">\n              <table *ngIf=\"!loading\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!--- Note that these columns can be defined in any order.\n                      The actual rendered columns are set as a property on the row definition\" -->\n              \n                <!-- Position Column -->\n                <ng-container matColumnDef=\"id\">\n                  <th mat-header-cell *matHeaderCellDef> ID </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"img\">\n                  <th mat-header-cell *matHeaderCellDef> Avatar </th>\n                  <td mat-cell *matCellDef=\"let element\"> \n                    <img class=\"og-avatar\" src=\"{{element.img}}\" alt=\"\">\n                  </td>\n                </ng-container>\n              \n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                  <th mat-header-cell *matHeaderCellDef> Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                </ng-container>\n              \n                <!-- Weight Column -->\n                <ng-container matColumnDef=\"email\">\n                  <th mat-header-cell *matHeaderCellDef> Email </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n                </ng-container>\n              \n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"phone\">\n                  <th mat-header-cell *matHeaderCellDef> Phone No. </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"address\">\n                    <th mat-header-cell *matHeaderCellDef> Location </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n                </ng-container>\n              \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              \n            </div>\n  \n      \n  \n          </div>\n\n  \n          \n  \n      </div>\n    </section>\n  \n    \n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTablesTablesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\n\n    <div class=\"content-header\">\n      <div class=\"container-fluid\">\n        <div class=\"row mb-2\">\n          <div class=\"col-sm-6\">\n            <h1 class=\"m-0\">Pipes</h1>\n          </div>\n          <div class=\"col-sm-6\">\n            <ol class=\"breadcrumb float-sm-right\">\n              <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard/first']\">Home</a></li>\n              <li class=\"breadcrumb-item active\">Pipes</li>\n            </ol>\n          </div>\n        </div>\n      </div>\n    </div>\n      \n    <section class=\"content\">\n      <div class=\"container-fluid\">\n        <h5 class=\"mb-3\">DataTable</h5>\n          <div class=\"row\">\n  \n            <div class=\"col-md-12 col-sm-12\">\n              <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!--- Note that these columns can be defined in any order.\n                      The actual rendered columns are set as a property on the row definition\" -->\n              \n                <!-- Position Column -->\n                <ng-container matColumnDef=\"position\">\n                  <th mat-header-cell *matHeaderCellDef> No. </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                </ng-container>\n              \n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                  <th mat-header-cell *matHeaderCellDef> Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                </ng-container>\n              \n                <!-- Weight Column -->\n                <ng-container matColumnDef=\"weight\">\n                  <th mat-header-cell *matHeaderCellDef> Weight </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n                </ng-container>\n              \n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"symbol\">\n                  <th mat-header-cell *matHeaderCellDef> Symbol </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n                </ng-container>\n              \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              \n            </div>\n  \n      \n  \n          </div>\n\n  \n          \n  \n      </div>\n    </section>\n  \n    \n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\" role=\"button\"><i class=\"fas fa-bars\"></i></a>\n      </li>\n      <li class=\"nav-item d-none d-sm-inline-block\">\n        <a href=\"index3.html\" class=\"nav-link\">Home</a>\n      </li>\n      <li class=\"nav-item d-none d-sm-inline-block\">\n        <a href=\"#\" class=\"nav-link\">Contact</a>\n      </li>\n    </ul>\n\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n   <!-- Main Sidebar Container -->\n   <aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\n    <!-- Brand Logo -->\n    <a [routerLink] = \"['first']\" class=\"brand-link\">\n      <img src=\"../../../assets/img/angular-logo.png\" alt=\"AdminLTE Logo\" class=\"brand-image img-circle elevation-3\" style=\"opacity: .8\">\n      <span class=\"brand-text font-weight-light\">Angular<strong>OGB</strong></span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n      <!-- Sidebar user panel (optional) -->\n      <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n        <div class=\"image\">\n          <img src=\"../../../assets/img/profile-img.jpg\" class=\"img-circle elevation-2\" alt=\"User Image\">\n        </div>\n        <div class=\"info\">\n          <a href=\"#\" class=\"d-block\">Oscar Gaytán Bermúdez</a>\n        </div>\n      </div>\n\n      <!-- Sidebar Menu -->\n      <nav class=\"mt-2\">\n        <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\n          \n       \n          <li class=\"nav-header\">ANGULAR TOOLS</li>\n          <li *ngFor='let tab of tabs' class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" *ngIf=\"!tab.children\" [routerLink]=\"[tab.link]\">\n              <i class=\"nav-icon {{tab.icon}}\"></i>\n              <p>\n                {{tab.title}}\n              </p>\n            </a>\n\n            \n            <a class=\"nav-link\" [class.active] = \"this.router.url.includes(tab.link)\" routerLinkActive=\"active\" *ngIf=\"tab.children\">\n              <i class=\"nav-icon {{tab.icon}}\"></i>\n              <p>\n                {{tab.title}}\n                <i class=\"right fas fa-angle-left\"></i>\n              </p>\n            </a>\n\n            <ul *ngIf=\"tab.children\" class=\"nav nav-treeview\">\n              <li *ngFor=\"let child of tab.children\" class=\"nav-item\">\n                <a class=\"nav-link child\" routerLinkActive=\"active\" [routerLink]=\"child.link\">\n                  <i class=\"nav-icon {{child.icon}}\"></i>\n                  <p>{{child.title}}\n                  </p>\n                </a>\n              </li>\n            </ul>\n          </li>\n         \n        </ul>\n      </nav>\n      <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n  </aside>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_pages_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/pages.routing */
    "./src/app/pages/pages.routing.ts");

    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'dashboard'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _pages_pages_routing__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-ogb';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_pages_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/pages.module */
    "./src/app/pages/pages.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_5__["PagesModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _content_card_content_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./content-card/content-card.component */
    "./src/app/components/content-card/content-card.component.ts");
    /* harmony import */


    var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-list/user-list.component */
    "./src/app/components/user-list/user-list.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_3__["ContentCardComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"]],
      exports: [_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_3__["ContentCardComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/content-card/content-card.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/content-card/content-card.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContentCardContentCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC1jYXJkL2NvbnRlbnQtY2FyZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/content-card/content-card.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/content-card/content-card.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ContentCardComponent */

  /***/
  function srcAppComponentsContentCardContentCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentCardComponent", function () {
      return ContentCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContentCardComponent = /*#__PURE__*/function () {
      function ContentCardComponent() {
        _classCallCheck(this, ContentCardComponent);
      }

      _createClass(ContentCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContentCardComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContentCardComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContentCardComponent.prototype, "icon", void 0);
    ContentCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-content-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content-card/content-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content-card.component.css */
      "./src/app/components/content-card/content-card.component.css"))["default"]]
    })], ContentCardComponent);
    /***/
  },

  /***/
  "./src/app/components/user-list/user-list.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/user-list/user-list.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserListUserListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/user-list/user-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/user-list/user-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppComponentsUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");

    var UserListComponent = /*#__PURE__*/function () {
      function UserListComponent(userService) {
        _classCallCheck(this, UserListComponent);

        this.userService = userService;
        this.users = [];
      }

      _createClass(UserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this = this;

          this.userService.getUsers$().subscribe(function (users) {
            _this.users = users;
          });
        }
      }]);

      return UserListComponent;
    }();

    UserListComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-list/user-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-list.component.css */
      "./src/app/components/user-list/user-list.component.css"))["default"]]
    })], UserListComponent);
    /***/
  },

  /***/
  "./src/app/models/employee.ts":
  /*!************************************!*\
    !*** ./src/app/models/employee.ts ***!
    \************************************/

  /*! exports provided: Employee */

  /***/
  function srcAppModelsEmployeeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Employee", function () {
      return Employee;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Employee = function Employee(id, name, email, phone, address, img) {
      _classCallCheck(this, Employee);

      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.address = address;
      this.img = img;
    };
    /***/

  },

  /***/
  "./src/app/pages/first/first.component.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/first/first.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFirstFirstComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcnN0L2ZpcnN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/first/first.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/first/first.component.ts ***!
    \************************************************/

  /*! exports provided: FirstComponent */

  /***/
  function srcAppPagesFirstFirstComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstComponent", function () {
      return FirstComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FirstComponent = /*#__PURE__*/function () {
      function FirstComponent() {
        _classCallCheck(this, FirstComponent);
      }

      _createClass(FirstComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FirstComponent;
    }();

    FirstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-first',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./first.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first/first.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./first.component.css */
      "./src/app/pages/first/first.component.css"))["default"]]
    })], FirstComponent);
    /***/
  },

  /***/
  "./src/app/pages/forms/forms.component.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/forms/forms.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFormsFormsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/forms/forms.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/forms/forms.component.ts ***!
    \************************************************/

  /*! exports provided: FormsComponent */

  /***/
  function srcAppPagesFormsFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
      return FormsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var FormsComponent = /*#__PURE__*/function () {
      function FormsComponent(fb, userService) {
        _classCallCheck(this, FormsComponent);

        this.fb = fb;
        this.userService = userService;
        this.reactiveForm = this.fb.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
          passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          message: [''],
          phones: this.fb.array([]),
          agree: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]]
        }, {
          validators: this.matchingPassword('password', 'passwordConfirm')
        });
        this.formSubmitted = false;
        this.confirmValid = false;
        this.showPassword = false;
        this.showPasswordConfirm = false;
      }

      _createClass(FormsComponent, [{
        key: "name",
        get: function get() {
          return this.reactiveForm.get('name');
        }
      }, {
        key: "email",
        get: function get() {
          return this.reactiveForm.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.reactiveForm.get('password');
        }
      }, {
        key: "passwordConfirm",
        get: function get() {
          return this.reactiveForm.get('passwordConfirm');
        }
      }, {
        key: "phonesForm",
        get: function get() {
          return this.reactiveForm.get('phones');
        }
      }, {
        key: "agree",
        get: function get() {
          return this.reactiveForm.get('agree');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addPhone",
        value: function addPhone() {
          var phone = this.fb.group({
            number: []
          });
          this.phonesForm.push(phone);
        }
      }, {
        key: "deletePhone",
        value: function deletePhone(index) {
          this.phonesForm.removeAt(index);
        }
      }, {
        key: "changeShowPassword",
        value: function changeShowPassword() {
          this.showPassword = !this.showPassword;
        }
      }, {
        key: "showForm",
        value: function showForm() {
          console.log(this.reactiveForm);
        }
      }, {
        key: "postForm",
        value: function postForm() {
          var _this2 = this;

          this.formSubmitted = true;
          this.checkConfirmPassword();

          if (this.reactiveForm.invalid) {
            return;
          }

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: "This information will be stored forever!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Yes, I'm sure!"
          }).then(function (result) {
            if (result.isConfirmed) {
              _this2.userService.addUser(_this2.reactiveForm.value);

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Done!', 'Your information has been sent.', 'success');
            }
          });
        }
      }, {
        key: "checkConfirmPassword",
        value: function checkConfirmPassword() {
          if (this.reactiveForm.get('passwordConfirm').invalid) {
            this.reactiveForm.controls.passwordConfirm.setValue('');
          }
        }
      }, {
        key: "matchingPassword",
        value: function matchingPassword(password, passwordConfirm) {
          return function (formGroup) {
            var passwordControl = formGroup.get(password);
            var password2Control = formGroup.get(passwordConfirm);

            if (passwordControl.value != password2Control.value) {
              password2Control.setErrors({
                notMatching: true
              });
            }
          };
        }
      }]);

      return FormsComponent;
    }();

    FormsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/forms.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forms.component.css */
      "./src/app/pages/forms/forms.component.css"))["default"]]
    })], FormsComponent);
    /***/
  },

  /***/
  "./src/app/pages/pages.component.css":
  /*!*******************************************!*\
    !*** ./src/app/pages/pages.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/pages.component.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/pages.component.ts ***!
    \******************************************/

  /*! exports provided: PagesComponent */

  /***/
  function srcAppPagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
      return PagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PagesComponent = /*#__PURE__*/function () {
      function PagesComponent() {
        _classCallCheck(this, PagesComponent);
      }

      _createClass(PagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagesComponent;
    }();

    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pages.component.css */
      "./src/app/pages/pages.component.css"))["default"]]
    })], PagesComponent);
    /***/
  },

  /***/
  "./src/app/pages/pages.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.module.ts ***!
    \***************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _first_first_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./first/first.component */
    "./src/app/pages/first/first.component.ts");
    /* harmony import */


    var _forms_forms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./forms/forms.component */
    "./src/app/pages/forms/forms.component.ts");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pipes/pipes.component */
    "./src/app/pages/pipes/pipes.component.ts");
    /* harmony import */


    var _tables_tables_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./tables/tables.component */
    "./src/app/pages/tables/tables.component.ts");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _tables_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./tables/mat-table/mat-table.component */
    "./src/app/pages/tables/mat-table/mat-table.component.ts");
    /* harmony import */


    var _tables_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./tables/data-table/data-table.component */
    "./src/app/pages/tables/data-table/data-table.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };

    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_first_first_component__WEBPACK_IMPORTED_MODULE_8__["FirstComponent"], _pages_component__WEBPACK_IMPORTED_MODULE_10__["PagesComponent"], _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_11__["PipesComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_9__["FormsComponent"], _tables_tables_component__WEBPACK_IMPORTED_MODULE_12__["TablesComponent"], _tables_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_18__["MatTableComponent"], _tables_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_19__["DataTableComponent"]],
      exports: [_first_first_component__WEBPACK_IMPORTED_MODULE_8__["FirstComponent"], _pages_component__WEBPACK_IMPORTED_MODULE_10__["PagesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"]]
    })], PagesModule);
    /***/
  },

  /***/
  "./src/app/pages/pages.routing.ts":
  /*!****************************************!*\
    !*** ./src/app/pages/pages.routing.ts ***!
    \****************************************/

  /*! exports provided: PagesRoutingModule */

  /***/
  function srcAppPagesPagesRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
      return PagesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _first_first_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./first/first.component */
    "./src/app/pages/first/first.component.ts");
    /* harmony import */


    var _forms_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./forms/forms.component */
    "./src/app/pages/forms/forms.component.ts");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pipes/pipes.component */
    "./src/app/pages/pipes/pipes.component.ts");
    /* harmony import */


    var _tables_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tables/data-table/data-table.component */
    "./src/app/pages/tables/data-table/data-table.component.ts");
    /* harmony import */


    var _tables_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tables/mat-table/mat-table.component */
    "./src/app/pages/tables/mat-table/mat-table.component.ts");

    var routes = [{
      path: 'dashboard',
      component: _pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"],
      children: [{
        path: '',
        component: _first_first_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"]
      }, {
        path: 'first',
        component: _first_first_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"]
      }, {
        path: 'forms',
        component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"]
      }, {
        path: 'pipes',
        component: _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_6__["PipesComponent"]
      }, {
        path: 'tables/data',
        component: _tables_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_7__["DataTableComponent"]
      }, {
        path: 'tables/material',
        component: _tables_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_8__["MatTableComponent"]
      }]
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'dashboard/first'
    }];

    var PagesRoutingModule = function PagesRoutingModule() {
      _classCallCheck(this, PagesRoutingModule);
    };

    PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PagesRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pipes/pipes.component.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/pipes/pipes.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPipesPipesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BpcGVzL3BpcGVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/pipes/pipes.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/pipes/pipes.component.ts ***!
    \************************************************/

  /*! exports provided: PipesComponent */

  /***/
  function srcAppPagesPipesPipesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesComponent", function () {
      return PipesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PipesComponent = /*#__PURE__*/function () {
      function PipesComponent() {
        _classCallCheck(this, PipesComponent);

        this.jsonObj = {
          'name': 'Oscar',
          'last_name': 'Gaytan'
        };
        this.dateVal = new Date();
        this.asyncValue = new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve('Data arrived');
          }, 3500);
        });
      }

      _createClass(PipesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PipesComponent;
    }();

    PipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pipes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pipes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pipes/pipes.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pipes.component.css */
      "./src/app/pages/pipes/pipes.component.css"))["default"]]
    })], PipesComponent);
    /***/
  },

  /***/
  "./src/app/pages/tables/data-table/data-table.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/pages/tables/data-table/data-table.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTablesDataTableDataTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxlcy9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/tables/data-table/data-table.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/tables/data-table/data-table.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DataTableComponent */

  /***/
  function srcAppPagesTablesDataTableDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableComponent", function () {
      return DataTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/employee.service */
    "./src/app/services/employee.service.ts");

    var DataTableComponent = /*#__PURE__*/function () {
      function DataTableComponent(employeeService) {
        _classCallCheck(this, DataTableComponent);

        this.employeeService = employeeService;
        this.employees = [];
        this.loading = true;
      }

      _createClass(DataTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getEmployees();
        }
      }, {
        key: "getEmployees",
        value: function getEmployees() {
          var _this3 = this;

          this.employeeService.getEmployees().subscribe(function (resp) {
            _this3.employees = resp.employees;
            _this3.loading = false;
          });
        }
      }]);

      return DataTableComponent;
    }();

    DataTableComponent.ctorParameters = function () {
      return [{
        type: _services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }];
    };

    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-data-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./data-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/data-table/data-table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./data-table.component.css */
      "./src/app/pages/tables/data-table/data-table.component.css"))["default"]]
    })], DataTableComponent);
    /***/
  },

  /***/
  "./src/app/pages/tables/mat-table/mat-table.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/pages/tables/mat-table/mat-table.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTablesMatTableMatTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGVzL21hdC10YWJsZS9tYXQtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxlcy9tYXQtdGFibGUvbWF0LXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/tables/mat-table/mat-table.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/tables/mat-table/mat-table.component.ts ***!
    \***************************************************************/

  /*! exports provided: MatTableComponent */

  /***/
  function srcAppPagesTablesMatTableMatTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTableComponent", function () {
      return MatTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/employee.service */
    "./src/app/services/employee.service.ts");

    var ELEMENT_DATA = [{
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H'
    }, {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He'
    }, {
      position: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li'
    }, {
      position: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be'
    }, {
      position: 5,
      name: 'Boron',
      weight: 10.811,
      symbol: 'B'
    }, {
      position: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C'
    }, {
      position: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N'
    }, {
      position: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O'
    }, {
      position: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }];

    var MatTableComponent = /*#__PURE__*/function () {
      function MatTableComponent(employeeService) {
        _classCallCheck(this, MatTableComponent);

        this.employeeService = employeeService;
        this.employees = [];
        this.displayedColumns = ['id', 'img', 'name', 'email', 'phone', 'address'];
        this.dataSource = this.employees;
        this.loading = true;
      }

      _createClass(MatTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getEmployees();
        }
      }, {
        key: "getEmployees",
        value: function getEmployees() {
          var _this4 = this;

          this.employeeService.getEmployees().subscribe(function (resp) {
            _this4.employees = resp.employees;
            _this4.dataSource = _this4.employees;
            _this4.loading = false;
            console.log(ELEMENT_DATA);
            console.log(_this4.employees);
          });
        }
      }]);

      return MatTableComponent;
    }();

    MatTableComponent.ctorParameters = function () {
      return [{
        type: _services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }];
    };

    MatTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mat-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mat-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/mat-table/mat-table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mat-table.component.css */
      "./src/app/pages/tables/mat-table/mat-table.component.css"))["default"]]
    })], MatTableComponent);
    /***/
  },

  /***/
  "./src/app/pages/tables/tables.component.css":
  /*!***************************************************!*\
    !*** ./src/app/pages/tables/tables.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTablesTablesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/tables/tables.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/tables/tables.component.ts ***!
    \**************************************************/

  /*! exports provided: TablesComponent */

  /***/
  function srcAppPagesTablesTablesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
      return TablesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ELEMENT_DATA = [{
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H'
    }, {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He'
    }, {
      position: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li'
    }, {
      position: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be'
    }, {
      position: 5,
      name: 'Boron',
      weight: 10.811,
      symbol: 'B'
    }, {
      position: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C'
    }, {
      position: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N'
    }, {
      position: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O'
    }, {
      position: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }];

    var TablesComponent = /*#__PURE__*/function () {
      function TablesComponent() {
        _classCallCheck(this, TablesComponent);

        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
      }

      _createClass(TablesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TablesComponent;
    }();

    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tables',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tables.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tables.component.css */
      "./src/app/pages/tables/tables.component.css"))["default"]]
    })], TablesComponent);
    /***/
  },

  /***/
  "./src/app/pipes/investment-return.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/pipes/investment-return.pipe.ts ***!
    \*************************************************/

  /*! exports provided: InvestmentReturnPipe */

  /***/
  function srcAppPipesInvestmentReturnPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvestmentReturnPipe", function () {
      return InvestmentReturnPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InvestmentReturnPipe = /*#__PURE__*/function () {
      function InvestmentReturnPipe() {
        _classCallCheck(this, InvestmentReturnPipe);
      }

      _createClass(InvestmentReturnPipe, [{
        key: "transform",
        value: function transform(value) {
          var rate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
          var taxes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
          var yearlyReturn = value * (rate / 100);
          var taxTotal = value * (taxes / 100);
          yearlyReturn -= taxTotal;
          var dailyReturn = yearlyReturn / 360;
          var actualReturn = dailyReturn * days;
          return Math.round((actualReturn + Number.EPSILON) * 100) / 100;
        }
      }]);

      return InvestmentReturnPipe;
    }();

    InvestmentReturnPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'investmentReturn'
    })], InvestmentReturnPipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _investment_return_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./investment-return.pipe */
    "./src/app/pipes/investment-return.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_investment_return_pipe__WEBPACK_IMPORTED_MODULE_3__["InvestmentReturnPipe"]],
      exports: [_investment_return_pipe__WEBPACK_IMPORTED_MODULE_3__["InvestmentReturnPipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/services/employee.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/employee.service.ts ***!
    \**********************************************/

  /*! exports provided: EmployeeService */

  /***/
  function srcAppServicesEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_employee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/employee */
    "./src/app/models/employee.ts");

    var api_url = 'https://randomuser.me/api/';

    var EmployeeService = /*#__PURE__*/function () {
      function EmployeeService(http, router) {
        _classCallCheck(this, EmployeeService);

        this.http = http;
        this.router = router;
      }

      _createClass(EmployeeService, [{
        key: "getEmployees",
        value: function getEmployees() {
          var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
          return this.http.get("".concat(api_url, "?results=").concat(results)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            var employees = resp.results.map(function (employee) {
              var id = employee.id,
                  name = employee.name,
                  email = employee.email,
                  phone = employee.phone,
                  location = employee.location,
                  picture = employee.picture;
              return new _models_employee__WEBPACK_IMPORTED_MODULE_5__["Employee"](id.value || '---', name.first + ' ' + name.last, email, phone, location.city + ', ' + location.country, picture.thumbnail);
            });
            return {
              employees: employees
            };
          }));
        }
      }]);

      return EmployeeService;
    }();

    EmployeeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], EmployeeService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService() {
        _classCallCheck(this, UserService);

        this.users = [];
        this.users$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(UserService, [{
        key: "addUser",
        value: function addUser(user) {
          //Add new user to array
          this.users.push(user); //Update observable to other components using it

          this.users$.next(this.users);
          console.log(this.users);
        }
      }, {
        key: "getUsers$",
        value: function getUsers$() {
          return this.users$.asObservable();
        }
      }]);

      return UserService;
    }();

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.css":
  /*!****************************************************!*\
    !*** ./src/app/shared/header/header.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/shared/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]],
      exports: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.css":
  /*!******************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-item{\n    border-radius: 3px !important;\n}\n\n.nav-link.active{\n    background-color: #4051b5 !important;\n}\n\n.nav-link.child.active{\n    background-color: #ffffff !important;\n    color: #343040 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbXtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbn1cblxuLm5hdi1saW5rLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA1MWI1ICFpbXBvcnRhbnQ7XG59XG4ubmF2LWxpbmsuY2hpbGQuYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzM0MzA0MCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(router, activatedRoute) {
        _classCallCheck(this, SidebarComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.tabs = [{
          title: 'Forms',
          link: 'forms',
          icon: 'far fa-check-square'
        }, {
          title: 'Pipes',
          link: 'pipes',
          icon: 'fab fa-pied-piper-alt'
        }, {
          title: 'Tables',
          link: 'tables',
          icon: 'fa fa-table',
          children: [{
            title: 'Regular Table',
            link: 'tables/data',
            icon: 'fa fa-table'
          }, {
            title: 'AngularMat Table',
            link: 'tables/material',
            icon: 'fab fa-angular'
          }]
        }];
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.activeUrl = this.router.url;
          this.getCurrent();
        }
      }, {
        key: "getCurrent",
        value: function getCurrent() {
          console.log(this.router.url);
        }
      }, {
        key: "activateParent",
        value: function activateParent(child) {
          console.log(child);
          this.activateParent = child;
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/shared/sidebar/sidebar.component.css"))["default"]]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/developer01/Desktop/OGB/angular-ogb/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map