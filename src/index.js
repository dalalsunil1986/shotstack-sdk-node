/**
 * shotstack
 * The Shotstack API is a video editing service that allows for the programatic creation of videos using JSON. 
 *
 * The version of the OpenAPI document: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Clip', 'model/Edit', 'model/ImageAsset', 'model/Offset', 'model/Output', 'model/QueuedResponse', 'model/QueuedResponseData', 'model/RenderResponse', 'model/RenderResponseData', 'model/Soundtrack', 'model/Timeline', 'model/TitleAsset', 'model/Track', 'model/Transition', 'model/VideoAsset', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Clip'), require('./model/Edit'), require('./model/ImageAsset'), require('./model/Offset'), require('./model/Output'), require('./model/QueuedResponse'), require('./model/QueuedResponseData'), require('./model/RenderResponse'), require('./model/RenderResponseData'), require('./model/Soundtrack'), require('./model/Timeline'), require('./model/TitleAsset'), require('./model/Track'), require('./model/Transition'), require('./model/VideoAsset'), require('./api/DefaultApi'));
  }
}(function(ApiClient, Clip, Edit, ImageAsset, Offset, Output, QueuedResponse, QueuedResponseData, RenderResponse, RenderResponseData, Soundtrack, Timeline, TitleAsset, Track, Transition, VideoAsset, DefaultApi) {
  'use strict';

  /**
   * The_Shotstack_API_is_a_video_editing_service_that_allows_for_the_programaticcreation_of_videos_using_JSON_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ShotstackSdk = require('index'); // See note below*.
   * var xxxSvc = new ShotstackSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ShotstackSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ShotstackSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ShotstackSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Clip model constructor.
     * @property {module:model/Clip}
     */
    Clip: Clip,
    /**
     * The Edit model constructor.
     * @property {module:model/Edit}
     */
    Edit: Edit,
    /**
     * The ImageAsset model constructor.
     * @property {module:model/ImageAsset}
     */
    ImageAsset: ImageAsset,
    /**
     * The Offset model constructor.
     * @property {module:model/Offset}
     */
    Offset: Offset,
    /**
     * The Output model constructor.
     * @property {module:model/Output}
     */
    Output: Output,
    /**
     * The QueuedResponse model constructor.
     * @property {module:model/QueuedResponse}
     */
    QueuedResponse: QueuedResponse,
    /**
     * The QueuedResponseData model constructor.
     * @property {module:model/QueuedResponseData}
     */
    QueuedResponseData: QueuedResponseData,
    /**
     * The RenderResponse model constructor.
     * @property {module:model/RenderResponse}
     */
    RenderResponse: RenderResponse,
    /**
     * The RenderResponseData model constructor.
     * @property {module:model/RenderResponseData}
     */
    RenderResponseData: RenderResponseData,
    /**
     * The Soundtrack model constructor.
     * @property {module:model/Soundtrack}
     */
    Soundtrack: Soundtrack,
    /**
     * The Timeline model constructor.
     * @property {module:model/Timeline}
     */
    Timeline: Timeline,
    /**
     * The TitleAsset model constructor.
     * @property {module:model/TitleAsset}
     */
    TitleAsset: TitleAsset,
    /**
     * The Track model constructor.
     * @property {module:model/Track}
     */
    Track: Track,
    /**
     * The Transition model constructor.
     * @property {module:model/Transition}
     */
    Transition: Transition,
    /**
     * The VideoAsset model constructor.
     * @property {module:model/VideoAsset}
     */
    VideoAsset: VideoAsset,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
