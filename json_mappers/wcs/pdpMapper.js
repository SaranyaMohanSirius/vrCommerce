import JM from 'json-mapper';
import constants from '../../constants/wcs/constants';

export default {

  /*
   * JSON Mapper for generating responses for PDP page
   */

  mapPdpJSON: function(body, inv) {
    let converter = JM.makeConverter({
      catalogEntryView: ['catalogEntryView', JM.map({

        price: ['price.0.value', function(url) {
          if (url) {
            return (url + "$");
          }
        }],
        name: 'name',
        fullImage: ['fullImage', function(url) {
          if (url) {
            return ("https:" + constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
          }
        }],
      })],
    });
    let result = converter(body);
    let jsonObj={};
    jsonObj.price = result.catalogEntryView[0].price;
    jsonObj.name = result.catalogEntryView[0].name;
    jsonObj.url = result.catalogEntryView[0].fullImage;

    return jsonObj;
  },

  /*
   * JSON Mapper for generating responses for Related products
   */

  mapRelatedProductsJSON: function(body, inv) {
    let converter = JM.makeConverter({
      catalogEntryView: ['catalogEntryView', JM.map({
        merchandisingAssociations: ['merchandisingAssociations', JM.map({
          hasSingleSKU: 'hasSingleSKU',
          catalogEntryTypeCode: 'catalogEntryTypeCode',
          buyable: 'buyable',
          store: 'storeID',
          uniqueID: 'uniqueID',
          listPrice: 'price.0.value',
          purchasePrice: 'price.1.value',
          code: 'partNumber',
          resourceId: 'resourceId',
          displayName: 'name',
          seoKeyword: 'seo_token_ntk',
          attributes: ['attributes', JM.map({
            displayable: 'displayable',
            name: 'name',
            identifier: 'identifier',
            values: ['values', JM.map({
              identifier: 'identifier',
              uniqueID: 'uniqueID',
              image: ['image1path', function(url) {
                if (url) {
                  return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
                }
              }],
            })],
          })],

          thumbnail: ['thumbnail', function(url) {
            if (url) {
              return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
            }
          }],
          fullImage: ['fullImage', function(url) {
            if (url) {
              return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
            }
          }],
        })],
      })],
    });
    let result = converter(body);
    let jsonObj = result;

    if (inv != true) {
      for (let i = 0; i < jsonObj.catalogEntryView.length; i++) {
        let invAvailability = inv.InventoryAvailability[i].inventoryStatus;
        let quantityAvailable = inv.InventoryAvailability[i].availableQuantity;

        jsonObj.catalogEntryView[i].availability = invAvailability;
        jsonObj.catalogEntryView[i].quantity = quantityAvailable;
      }
    }
    return jsonObj;
  },
  /*
   * JSON Mapper for generating responses for Quick View page
   */

  mapQuickViewJSON: function(body, inv) {
    let converter = JM.makeConverter({
      catalogEntryView: ['catalogEntryView', JM.map({
        hasSingleSKU: 'hasSingleSKU',
        uniqueId: 'uniqueID',
        catalogEntryTypeCode: 'catalogEntryTypeCode',
        buyable: 'buyable',
        store: 'storeID',
        listPrice: 'price.0.value',
        purchasePrice: 'price.1.value',
        code: 'partNumber',
        resourceId: 'resourceId',
        displayName: 'name',
        seoKeyword: 'seo_token_ntk',
        attributes: ['attributes', JM.map({
          displayable: 'displayable',
          name: 'name',
          identifier: 'identifier',
          values: ['values', JM.map({
            identifier: 'identifier',
            uniqueID: 'uniqueID',
            image: ['image1path', function(url) {
              if (url) {
                return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
              }
            }],
          })],
        })],
        skus: ['sKUs', JM.map({
          skuId: 'uniqueID',
          hasSingleSKU: 'hasSingleSKU',
          catalogEntryTypeCode: 'catalogEntryTypeCode',
          buyable: 'buyable',
          store: 'storeID',
          listPrice: 'price.0.value',
          purchasePrice: 'price.1.value',
          code: 'partNumber',
          resourceId: 'resourceId',
          displayName: 'name',
          seoKeyword: 'seo_token_ntk',
          attributes: ['attributes', JM.map({
            displayable: 'displayable',
            name: 'name',
            identifier: 'identifier',
            values: ['values', JM.map({
              identifier: 'identifier',
              uniqueID: 'uniqueID',
              image: ['image1path', function(url) {
                if (url) {
                  return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
                }
              }],
            })],
          })],
          attachments: ['attachments', JM.map({
            attachmentAssetPath: ['attachmentAssetPath', function(url) {
              if (url) {
                return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
              }
            }],
            usage: 'usage',
          })],
          thumbnail: ['thumbnail', function(url) {
            if (url) {
              return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
            }
          }],
        })],
        thumbnail: ['thumbnail', function(url) {
          if (url) {
            return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
          }
        }],
        fullImage: ['fullImage', function(url) {
          if (url) {
            return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
          }
        }],
        attachments: ['attachments', JM.map({
          attachmentAssetPath: ['attachmentAssetPath', function(url) {
            if (url) {
              return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
            }
          }],
          usage: 'usage',
        })],
      })],
    });
    let result = converter(body);
    let jsonObj = result;

    for (let i = 0; i < jsonObj.catalogEntryView.length; i++) {
      let invAvailability = inv.InventoryAvailability[i].inventoryStatus;
      let quantityAvailable = inv.InventoryAvailability[i].availableQuantity;

      jsonObj.catalogEntryView[i].availability = invAvailability;
      jsonObj.catalogEntryView[i].quantity = quantityAvailable;
    }
    return jsonObj;
  },

  /*
   * JSON Mapper for generating responses for Recently viewed items
   */
  mapRecentlyViewedProductsJSON: function(body) {
    let converter = JM.makeConverter({
      resourceId: 'resourceId',
      recentlyViewedProducts: ['MarketingSpotData.0.baseMarketingSpotActivityData', JM.map({
        catalogEntryTypeCode: 'catalogEntryTypeCode',
        currency: 'currency',
        partNumber: 'productPartNumber',
        productId: 'productId',
        purchasePrice: 'standardPrice',
        listPrice: 'listPrice',
        seoKeyword: 'seo_token_ntk',
        description: ['description', JM.map({
          thumbnail: ['thumbnail', function(url) {
            if (url) {
              return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
            }
          }],
          shortDescription: 'shortDescription',
          longDescription: 'longDescription',
          language: 'language',
          productName: 'productName'
        })],
        attributes: ['attributes', JM.map({
          name: 'name',
          stringValue: 'stringValue'
        })]
      })]

    });
    let result = converter(body);
    return result;
  },

  mapProductDetailBySingleIdJSON: function(body) {



    let converter = JM.makeConverter({
      catalogEntryView: ['catalogEntryView', JM.map({
        hasSingleSKU: 'hasSingleSKU',
        uniqueId: 'uniqueID',
        catalogEntryTypeCode: 'catalogEntryTypeCode',
        buyable: 'buyable',
        store: 'storeID',
        listPrice: 'price.0.value',
        purchasePrice: 'price.1.value',
        code: 'partNumber',
        resourceId: 'resourceId',
        displayName: 'name',
        seoKeyword: 'seo_token_ntk',
        attributes: ['attributes', JM.map({
          displayable: 'displayable',
          name: 'name',
          identifier: 'identifier',
          values: ['values', JM.map({
            identifier: 'identifier',
            uniqueID: 'uniqueID',
            image: ['image1path', function(url) {
              if (url) {
                return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
              }
            }],
          })],
        })],
        skus: ['sKUs', JM.map({
          skuId: 'uniqueID',
          hasSingleSKU: 'hasSingleSKU',
          catalogEntryTypeCode: 'catalogEntryTypeCode',
          buyable: 'buyable',
          store: 'storeID',
          listPrice: 'price.0.value',
          purchasePrice: 'price.1.value',
          code: 'partNumber',
          resourceId: 'resourceId',
          displayName: 'name',
          seoKeyword: 'seo_token_ntk',
          attributes: ['attributes', JM.map({
            displayable: 'displayable',
            name: 'name',
            identifier: 'identifier',
            values: ['values', JM.map({
              identifier: 'identifier',
              uniqueID: 'uniqueID',
              image: ['image1path', function(url) {
                if (url) {
                  return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
                }
              }],
            })],
          })],
          thumbnail: ['thumbnail', function(url) {
            if (url) {
              return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
            }
          }],
          attachments: ['attachments', JM.map({
            attachmentAssetPath: ['attachmentAssetPath', function(url) {
              if (url) {
                return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
              }
            }],
            usage: 'usage',
          })],
        })],
        thumbnail: ['thumbnail', function(url) {
          if (url) {
            return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
          }
        }],
        fullImage: ['fullImage', function(url) {
          if (url) {
            return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
          }
        }],
        attachments: ['attachments', JM.map({
          attachmentAssetPath: ['attachmentAssetPath', function(url) {
            if (url) {
              return (constants.WCS_DOUBLE_SLASH + constants.WCS_HOSTNAME_NOPORT + url);
            }
          }],
          usage: 'usage',
        })],
      })],


    });
    let result = converter(body);
    return result;
  }
};
