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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.Output = factory(root.ShotstackSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Output model module.
   * @module model/Output
   * @version v1
   */

  /**
   * Constructs a new <code>Output</code>.
   * The video output format
   * @alias module:model/Output
   * @class
   * @param format {module:model/Output.FormatEnum} 
   * @param resolution {module:model/Output.ResolutionEnum} 
   */
  var exports = function(format, resolution) {
    var _this = this;

    _this['format'] = format;
    _this['resolution'] = resolution;
  };

  /**
   * Constructs a <code>Output</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Output} obj Optional instance to populate.
   * @return {module:model/Output} The populated <code>Output</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('resolution')) {
        obj['resolution'] = ApiClient.convertToType(data['resolution'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Output.FormatEnum} format
   */
  exports.prototype['format'] = undefined;
  /**
   * @member {module:model/Output.ResolutionEnum} resolution
   */
  exports.prototype['resolution'] = undefined;


  /**
   * @return {module:model/Output.FormatEnum}
   */
  exports.prototype.getFormat = function() {
    return this['format'];
  }

  /**
   * @param {module:model/Output.FormatEnum} format
   */
  exports.prototype.setFormat = function(format) {
    this['format'] = format;
  }


  /**
   * @return {module:model/Output.ResolutionEnum}
   */
  exports.prototype.getResolution = function() {
    return this['resolution'];
  }

  /**
   * @param {module:model/Output.ResolutionEnum} resolution
   */
  exports.prototype.setResolution = function(resolution) {
    this['resolution'] = resolution;
  }


  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "mp4"
     * @const
     */
    "mp4": "mp4",
    /**
     * value: "gif"
     * @const
     */
    "gif": "gif"  };

  /**
   * Allowed values for the <code>resolution</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResolutionEnum = {
    /**
     * value: "preview"
     * @const
     */
    "preview": "preview",
    /**
     * value: "mobile"
     * @const
     */
    "mobile": "mobile",
    /**
     * value: "sd"
     * @const
     */
    "sd": "sd",
    /**
     * value: "hd"
     * @const
     */
    "hd": "hd",
    /**
     * value: "1080"
     * @const
     */
    "1080": "1080"  };


  return exports;
}));


