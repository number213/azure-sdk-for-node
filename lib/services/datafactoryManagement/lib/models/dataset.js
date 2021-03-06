/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The Azure Data Factory nested object which identifies data within different
 * data stores, such as tables, files, folders, and documents.
 *
 */
class Dataset {
  /**
   * Create a Dataset.
   * @member {string} [description] Dataset description.
   * @member {object} [structure] Columns that define the structure of the
   * dataset. Type: array (or Expression with resultType array), itemType:
   * DatasetDataElement.
   * @member {object} linkedServiceName Linked service reference.
   * @member {string} [linkedServiceName.referenceName] Reference LinkedService
   * name.
   * @member {object} [parameters] Parameters for dataset.
   * @member {string} type Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of Dataset
   *
   * @returns {object} metadata of Dataset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Dataset',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'Dataset',
        className: 'Dataset',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          structure: {
            required: false,
            serializedName: 'structure',
            type: {
              name: 'Object'
            }
          },
          linkedServiceName: {
            required: true,
            serializedName: 'linkedServiceName',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'LinkedServiceReference'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ParameterSpecificationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ParameterSpecification'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Dataset;
