module.exports = {
  openapi: "3.0.0",
  "x-stoplight": {
    id: "h0qh01vbqeyb6",
  },
  info: {
    title: "https://statsigapi.net/console/v1",
    version: "1.0.0",
    description: "Experiment endpoint",
  },
  servers: [
    {
      url: "https://statsigapi.net/console/v1",
    },
  ],
  components: {
    securitySchemes: {
      "STATSIG-API-KEY": {
        type: "apiKey",
        in: "header",
        name: "STATSIG-API-KEY",
      },
    },
    schemas: {
      experiment_override: {
        type: "object",
        "x-examples": {
          "example-1": {
            passingUserIDs: ["passing-user"],
            failingUserIDs: ["failing-user"],
          },
        },
        description:
          "Forces users which pass a gate or are in a segment into the desired group.",
        title: "",
        properties: {
          type: {
            type: "string",
            enum: ["segment", "gate"],
          },
          id: {
            type: "string",
            description: "The id of the segment or gate",
          },
          groupID: {
            type: "string",
            description: "The experiment group which user will be forced into",
          },
        },
        required: ["type", "id", "groupID"],
      },
      description: {
        title: "description",
        "x-stoplight": {
          id: "p7vwx0hr47aw5",
        },
        type: "string",
        description: "A helpful summary of what this experiment does",
        "x-examples": {
          "example-1": "A helpful summary of what this experiment does",
        },
      },
      id: {
        title: "id",
        "x-stoplight": {
          id: "k1z68ti7f924d",
        },
        type: "string",
        description:
          'The name that was originally given to the experiment on creation but formatted as an ID ("A Experiment" -> "a_experiment")',
      },
      idType: {
        title: "idType",
        "x-stoplight": {
          id: "ex4xg41yih6ib",
        },
        type: "string",
        description: "The type of ID which the experiment is based on.",
        "x-examples": {
          "example-1": "userID",
        },
      },
      status: {
        title: "status",
        "x-stoplight": {
          id: "fcoljihk5fqsi",
        },
        type: "string",
        description: "The current status of the experiment.",
        enum: ["setup", "active", "decision_made"],
      },
      hypothesis: {
        title: "hypothesis",
        "x-stoplight": {
          id: "pkpn3dmg2slrb",
        },
        type: "string",
        description: "A statement that will be tested by this experiment.",
      },
      alloation: {
        title: "alloation",
        "x-stoplight": {
          id: "x18r7ln5s9fvz",
        },
        type: "number",
        description: "Percent of layer allocated to this experiment",
        minimum: 0,
        maximum: 100,
      },
      duration: {
        title: "duration",
        "x-stoplight": {
          id: "rcd3vjzl7246w",
        },
        type: "integer",
        description: "How long the experiment should last in days",
        minimum: 0,
      },
      targetingGateID: {
        title: "targetingGateID",
        "x-stoplight": {
          id: "94xkly2tzwcj1",
        },
        type: "string",
        description:
          "Restrict your experiment to users passing the selected feature gate.",
      },
      defaultConfidenceInterval: {
        title: "defaultConfidenceInterval",
        "x-stoplight": {
          id: "hjgb0jyf73821",
        },
        type: "string",
        description: "Default error margin used for results",
        enum: ["80", "90", "95", "98", "99"],
      },
      bonferroniCorrection: {
        title: "bonferroniCorrection",
        "x-stoplight": {
          id: "ec9wtngxr13yr",
        },
        type: "boolean",
        description: "Is Bonferroni correction applied?",
      },
      groups: {
        title: "groups",
        "x-stoplight": {
          id: "ni3hh31643iv9",
        },
        type: "array",
        description: "The test groups for your experiment",
        items: {
          type: "object",
          description: "Group object",
          properties: {
            name: {
              type: "string",
              description: "name of the group",
            },
            size: {
              type: "number",
              description:
                "What percentage of traffic should be passed into this group",
              minimum: 0,
              maximum: 100,
            },
            parameterValues: {
              type: "object",
            },
          },
          required: ["name", "size", "parameterValues"],
        },
      },
      experiment_id_override: {
        type: "object",
        "x-examples": {
          "example-1": {
            groupID: "Control",
            ids: ["updated_id_list"],
          },
        },
        properties: {
          groupID: {
            type: "string",
            description: "The experiment group which user will be forced into",
          },
          ids: {
            type: "array",
            description: "The userID(s) to force into an experiment group",
            items: {
              type: "string",
            },
          },
        },
        required: ["groupID", "ids"],
        description: "Forces specific users into the desired group.",
      },
      tags: {
        title: "tags",
        "x-stoplight": {
          id: "8eiqinzy4oea1",
        },
        type: ["array"],
        description: "Override the project tags assigned to this experiment",
        items: {
          type: "string",
          example: "* Core",
        },
      },
      metricTags: {
        title: "metricTags",
        "x-stoplight": {
          id: "56jou9fw3u95z",
        },
        type: "array",
        items: {
          type: "string",
        },
        description: "The name of tags as listed on the /tags endpoint",
      },
    },
    responses: {
      "experiment_404.json": {
        description: "Example response",
        content: {
          "application/json": {
            schema: {
              type: "object",
              "x-examples": {
                "example-1": {
                  status: 404,
                  message: "Experiment not found.",
                },
              },
              properties: {
                status: {
                  $ref: "../models/status.json",
                },
                message: {
                  $ref: "../models/message.json",
                },
              },
            },
            examples: {
              "example-1": {
                value: {
                  status: 404,
                  message: "Experiment not found.",
                },
              },
            },
          },
        },
      },
    },
  },
  security: [
    {
      "STATSIG-API-KEY": [],
    },
  ],
  paths: {
    "/experiments": {
      post: {
        tags: ["Experiments"],
        summary: "Create Experiment",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                "x-examples": {
                  "example-1": {
                    name: {
                      type: "string",
                      description:
                        "The display name to give the new experiment",
                    },
                    description: {
                      type: "string",
                      description: "A summary of what this experiment does",
                    },
                  },
                },
                description: "Experiment Create Contract",
                properties: {
                  name: {
                    type: "string",
                    description: "The name of the new experiment.",
                    example: "A experiment",
                  },
                  description: {
                    type: "string",
                    description: "A description of the new experiment.",
                    example: "A helpful summary of what this experiment does",
                  },
                  idType: {
                    type: "string",
                    description:
                      "The idType the experiment will be performed on.",
                    example: "userID",
                  },
                  layerID: {
                    type: "string",
                    description: "Which layer to place the experiment into.",
                    example: "layer_1",
                  },
                  creatorID: {
                    type: "string",
                    "x-stoplight": {
                      id: "fqz7tz8qqqzy5",
                    },
                    example: "35sClJFs8l0y5uRQhDwUDo",
                    description:
                      "The userID of intended creator, defaults to Console API",
                  },
                },
                required: ["name"],
              },
              examples: {
                "example-1": {
                  value: {
                    name: "a_experiment",
                    description: "helpful summary of what this experiment does",
                    idType: "userID",
                    layerID: "a_layer",
                    creatorID: "35sClJFs8l0y5uRQhDwUDo",
                  },
                },
              },
            },
            "application/xml": {
              schema: {
                type: "object",
                "x-examples": {
                  "example-1": {
                    name: {
                      type: "string",
                      description:
                        "The display name to give the new experiment",
                    },
                    description: {
                      type: "string",
                      description: "A summary of what this experiment does",
                    },
                  },
                },
                properties: {
                  name: {
                    type: "object",
                    properties: {
                      type: {
                        type: "string",
                        description: "Name of the new experiment",
                      },
                      description: {
                        type: "string",
                        description: "A summary of this experiment purpose",
                      },
                    },
                  },
                },
              },
            },
          },
          description: "Create new Experiment",
        },
        responses: {
          201: {
            description: "Created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      $ref: "../models/message.json",
                    },
                    data: {
                      $ref: "../models/experiment.json",
                    },
                  },
                },
                examples: {
                  "example-1": {
                    value: {
                      message: "Experiment created successfully.",
                      data: {
                        id: "a_experiment",
                        description:
                          "helpful summary of what this experiment does",
                        lastModifierName: "CONSOLE API",
                        lastModifierID: "4FKF0sUbi1D7xZFW5vcHWB",
                        idType: "userID",
                        status: "setup",
                        layerID: "a_layer",
                        hypothesis: "",
                        primaryMetrics: [],
                        primaryMetricTags: [],
                        secondaryMetrics: [],
                        secondaryMetricTags: [],
                        groups: [
                          {
                            name: "Control",
                            size: 50,
                            parameterValues: {},
                          },
                          {
                            name: "Test",
                            size: 50,
                            parameterValues: {},
                          },
                        ],
                        allocation: 0,
                        duration: 14,
                        targetingGateID: "",
                        defaultConfidenceInterval: "95",
                        bonferroniCorrection: false,
                        tags: ["* Core"],
                        decisionReason: "",
                      },
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      status: {
                        type: "number",
                        description: "Status Code",
                      },
                      message: {
                        type: "string",
                        description: "A summary of what went wrong",
                      },
                    },
                  },
                  properties: {
                    status: {
                      $ref: "../models/status.json",
                    },
                    message: {
                      $ref: "../models/message.json",
                    },
                    error: {
                      type: "array",
                      description:
                        "A list of errors that have occured with the request",
                      items: {
                        type: "object",
                        properties: {
                          property: {
                            type: "string",
                            description:
                              "Which property of the request body is invalid",
                          },
                          error: {
                            type: "string",
                            description: "A description of the problem",
                          },
                        },
                      },
                    },
                  },
                  required: ["status", "message"],
                },
                examples: {
                  "example-0": {
                    summary: "400 Name Used",
                    value: {
                      status: 400,
                      message: "Name is already in use",
                    },
                  },
                  "example-1": {
                    summary: "400 Missing Field",
                    value: {
                      status: 400,
                      message: "Bad Request Exception",
                      errors: [
                        {
                          property: "name",
                          errorMessage: "Required",
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
        },
        description: "Create a new experiment",
      },
      get: {
        summary: "Read All Experiments",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    Message: {
                      type: "string",
                      description: "The status of the request",
                    },
                    data: {
                      type: "array",
                      description: "An array of existing experiment objects",
                      items: {
                        $ref: "../models/experiment.json",
                      },
                    },
                  },
                },
                examples: {
                  "example-1": {
                    value: {
                      message: "Experiments listed successfully.",
                      data: [
                        {
                          id: "a_experiment",
                          description:
                            "A helpful summary of what this experiment does",
                          lastModifierName: "CONSOLE API",
                          lastModifierID: "79djvKHavV9djhKHlVCeu",
                          idType: "userID",
                          status: "active",
                          layerID: "test_layer_with_holdout",
                          hypothesis: "",
                          primaryMetrics: [],
                          primaryMetricTags: [],
                          secondaryMetrics: [],
                          secondaryMetricTags: ["* Core"],
                          groups: [
                            {
                              name: "Control",
                              size: 50,
                              parameterValues: {
                                key: "1",
                              },
                            },
                            {
                              name: "Test",
                              size: 50,
                              parameterValues: {
                                key: "0",
                              },
                            },
                          ],
                          allocation: 100,
                          targetingGateID: "test_public",
                          defaultConfidenceInterval: "95",
                          bonferroniCorrection: false,
                          tags: ["* Core"],
                          decisionReason: "",
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                example: {
                  status: 403,
                  message: "Forbidden resource",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
        },
        operationId: "",
        description: "Get a list of all experiments",
        "x-code-samples": [
          {
            lang: "cURL",
            label: "cURL",
            source:
              "curl --request GET 'https://statsigapi.net/console/v1/experiments' --header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx'",
          },
        ],
        tags: ["Experiments"],
        parameters: [
          {
            schema: {
              type: "string",
            },
            in: "query",
            name: "status",
            description: "Filter by experiment status",
          },
          {
            schema: {
              type: "array",
            },
            in: "query",
            name: "tags",
            description: "Filter by experiments with selected tags",
          },
          {
            schema: {
              type: "string",
            },
            in: "query",
            name: "layerID",
            description: "Filter by experiments inside of the selected layer",
          },
        ],
      },
      parameters: [],
    },
    "/experiments/{experiment_id}": {
      get: {
        tags: ["Experiments"],
        summary: "Read Single Experiment",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      message: "Experiment read successfully.",
                      data: {
                        id: "a_experiment",
                        isEnabled: true,
                        description:
                          "helpful summary of what this experiment does",
                        lastModifierName: "CONSOLE API",
                        lastModifierID: "1vaQaBoLlkauH9iiuOSBP2",
                        rules: [
                          {
                            name: "All Conditions",
                            passPercentage: 10,
                            conditions: [
                              {
                                type: "public",
                              },
                              {
                                type: "user_id",
                                targetValue: ["111", "222"],
                                operator: "any",
                              },
                              {
                                type: "email",
                                targetValue: ["@outlook.com", "@gmail.com"],
                                operator: "str_contains_any",
                              },
                              {
                                type: "email",
                                operator: "is_null",
                              },
                              {
                                type: "custom_field",
                                targetValue: 31,
                                operator: "gt",
                                field: "age",
                              },
                              {
                                type: "app_version",
                                targetValue: "1.1.1",
                                operator: "version_gt",
                              },
                              {
                                type: "browser_name",
                                targetValue: ["Android", "Chrome"],
                                operator: "any",
                              },
                              {
                                type: "browser_version",
                                targetValue: ["94.0.4606.81", "94.0.4606.92"],
                                operator: "any",
                              },
                              {
                                type: "os_name",
                                targetValue: ["Android", "Windows"],
                                operator: "none",
                              },
                              {
                                type: "os_version",
                                targetValue: "11.0.0",
                                operator: "version_lte",
                              },
                              {
                                type: "country",
                                targetValue: ["NZ", "US"],
                                operator: "any",
                              },
                              {
                                type: "passes_experiment",
                                targetValue: "my_experiment_2",
                              },
                              {
                                type: "fails_experiment",
                                targetValue: "my_experiment_2",
                              },
                              {
                                type: "time",
                                targetValue: 1643070357193,
                                operator: "after",
                              },
                              {
                                type: "environment_tier",
                                targetValue: ["production"],
                                operator: "any",
                              },
                              {
                                type: "passes_segment",
                                targetValue: "growth_org",
                              },
                              {
                                type: "fails_segment",
                                targetValue: "growth_org",
                              },
                              {
                                type: "ip_address",
                                targetValue: ["1.1.1.1", "8.8.8.8"],
                                operator: "any",
                              },
                            ],
                          },
                        ],
                      },
                    },
                  },
                  properties: {
                    message: {
                      $ref: "../models/message.json",
                    },
                    data: {
                      $ref: "../models/experiment.json",
                    },
                  },
                },
                examples: {
                  "example-1": {
                    value: {
                      message: "Experiment read successfully.",
                      data: {
                        id: "a_experiment",
                        description: "",
                        lastModifierName: "CONSOLE API",
                        lastModifierID: "4FKF0sUbi1D7xZFW5vcHWB",
                        idType: "userID",
                        status: "setup",
                        launchedGroupID: null,
                        layerID: "statsig::a_experiment_layer",
                        hypothesis: "",
                        primaryMetrics: [],
                        primaryMetricTags: [],
                        secondaryMetrics: [],
                        secondaryMetricTags: [],
                        groups: [
                          {
                            name: "Control",
                            id: "4HbgLdfqlIeN3sHkyMG1qC",
                            size: 50,
                            parameterValues: {},
                          },
                          {
                            name: "Test",
                            size: 50,
                            parameterValues: {},
                          },
                        ],
                        allocation: 100,
                        duration: 14,
                        targetingGateID: "",
                        defaultConfidenceInterval: "95",
                        bonferroniCorrection: false,
                        tags: ["* Core"],
                        decisionReason: "",
                      },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            $ref: "#/components/responses/experiment_404.json",
          },
        },
        description: "Read data from a single experiment ",
        parameters: [],
      },
      post: {
        tags: ["Experiments"],
        summary: "Fully Update Experiment",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      $ref: "../models/message.json",
                    },
                    data: {
                      $ref: "../models/experiment.json",
                    },
                  },
                },
                example: {
                  message: "Experiment updated successfully.",
                  data: {
                    id: "a_experiment",
                    isEnabled: true,
                    description: "Description Here",
                    lastModifierName: "CONSOLE API",
                    lastModifierID: "5rfuqoxLIYTscuSaaCOlB8",
                    rules: [
                      {
                        name: "Specific Users",
                        passPercentage: 100,
                        conditions: [
                          {
                            type: "user_id",
                            targetValue: ["111", "222"],
                            operator: "any",
                          },
                        ],
                      },
                      {
                        name: "Public",
                        passPercentage: 10,
                        conditions: [
                          {
                            type: "public",
                          },
                        ],
                      },
                    ],
                  },
                },
                examples: {
                  "example-1": {
                    value: {
                      message: "string",
                      data: {
                        id: "a_experiment",
                        description:
                          "a helpful summary of what this experiment does",
                        lastModifierName: "CONSOLE API",
                        lastModifierID: "f0JAV9dd7KF0sUbi1DHWB",
                        idType: "userID",
                        status: "setup",
                        layerID: "layer1",
                        hypothesis: "Does 1 or 0 work better?",
                        primaryMetrics: [
                          {
                            name: "l14",
                            type: "user",
                          },
                        ],
                        primaryMetricTags: [],
                        secondaryMetrics: [
                          {
                            name: "mau_28d",
                            type: "user",
                          },
                        ],
                        secondaryMetricTags: [],
                        groups: [
                          {
                            name: "group1",
                            size: 50,
                            parameterValues: {
                              key: 1,
                            },
                          },
                          {
                            name: "gruop2",
                            size: 50,
                            parameterValues: {
                              key: 0,
                            },
                          },
                        ],
                        allocation: 50.46,
                        duration: 14,
                        targetingGateID: "a_gate",
                        defaultConfidenceInterval: "95",
                        bonferroniCorrection: false,
                        tags: [],
                      },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            $ref: "#/components/responses/experiment_404.json",
          },
        },
        description: "Update all properties of the experiment",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  description: {
                    $ref: "#/components/schemas/description",
                  },
                  idType: {
                    $ref: "#/components/schemas/idType",
                  },
                  tags: {
                    $ref: "#/components/schemas/tags",
                  },
                  status: {
                    $ref: "../models/experiment_status.json",
                  },
                  hypothesis: {
                    $ref: "#/components/schemas/hypothesis",
                  },
                  primaryMetrics: {
                    description:
                      "Main metrics needed to evaluate your hypothesis",
                    type: "array",
                    items: {
                      $ref: "../models/experiment_metric.json",
                    },
                  },
                  primaryMetricTags: {
                    $ref: "#/components/schemas/metricTags",
                  },
                  secondaryMetrics: {
                    type: "array",
                    description:
                      "Additional metric you may want to monitor that might impact the analysis or final decision of the experiment",
                    items: {
                      $ref: "../models/experiment_metric.json",
                    },
                  },
                  secondaryMetricTags: {
                    $ref: "#/components/schemas/metricTags",
                  },
                  groups: {
                    type: "array",
                    description: "The test groups for your experiment",
                    items: {
                      $ref: "#/components/schemas/groups",
                    },
                  },
                  allocation: {
                    $ref: "#/components/schemas/alloation",
                  },
                  duration: {
                    $ref: "#/components/schemas/duration",
                  },
                  targetingGateID: {
                    $ref: "#/components/schemas/targetingGateID",
                  },
                  defaultConfidenceInterval: {
                    $ref: "#/components/schemas/defaultConfidenceInterval",
                  },
                  bonferroniCorrection: {
                    $ref: "#/components/schemas/bonferroniCorrection",
                  },
                  targetApps: {
                    $ref: "../models/targetApps.json",
                  },
                },
                required: [
                  "description",
                  "idType",
                  "status",
                  "hypothesis",
                  "primaryMetrics",
                  "secondaryMetrics",
                  "groups",
                  "allocation",
                  "duration",
                  "targetingGateID",
                  "defaultConfidenceInterval",
                  "bonferroniCorrection",
                ],
              },
              examples: {
                "example-1": {
                  value: {
                    description: "Updated summary of what this experiment does",
                    idType: "userID",
                    lastModifierName: "CONSOLE API",
                    lastModifierID: "66wvNB1zril4QQWFOGvfTP",
                    tags: ["customTag"],
                    targetApps: [],
                    status: "setup",
                    hypothesis: "Updated hypothesis",
                    launchedGroupID: null,
                    startTime: null,
                    endTime: null,
                    layerID: null,
                    primaryMetrics: [],
                    primaryMetricTags: [],
                    secondaryMetrics: [],
                    secondaryMetricTags: [],
                    groups: [
                      {
                        name: "group1",
                        id: "4HbgLdfqlIeN3sHkyMG1qC",
                        size: 50,
                        parameterValues: {
                          key: 1,
                        },
                      },
                      {
                        name: "group2",
                        id: "4HbgLeUsO0ohmSfg9UBEJE",
                        size: 50,
                        parameterValues: {},
                      },
                    ],
                    allocation: 50,
                    duration: 28,
                    targetingGateID: "a_gate",
                    defaultConfidenceInterval: "90",
                    bonferroniCorrection: false,
                    decisionReason: "",
                  },
                },
              },
            },
          },
          description: "Update Experiment",
        },
        parameters: [],
      },
      delete: {
        tags: ["Experiments"],
        summary: "Delete Experiment",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      message: "Experiment deleted successfully.",
                    },
                  },
                  properties: {
                    message: {
                      $ref: "../models/message.json",
                    },
                  },
                },
                examples: {
                  "example-1": {
                    value: {
                      message: "Experiment deleted successfully.",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            $ref: "#/components/responses/experiment_404.json",
          },
        },
        description: "Delete a experiment",
        parameters: [],
      },
      parameters: [
        {
          schema: {
            type: "string",
            example: "a_experiment",
          },
          name: "experiment_id",
          in: "path",
          required: true,
          description: "experiment ID to query",
        },
      ],
      patch: {
        summary: "Partially Update Experiment",
        operationId: "patch-experiments-experiment_id",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      message: "Experiment updated successfully.",
                      data: {
                        id: "a_experiment",
                        description: "updated summary",
                        lastModifierName: "CONSOLE API",
                        lastModifierID: "1vaQaBoLlkauH9iiuOSBP2",
                        idType: "userID",
                        status: "setup",
                        layerID: "statsig::a_experiment_layer",
                        hypothesis: "updated hypothesis",
                        primaryMetrics: [],
                        secondaryMetrics: [],
                        groups: [
                          {
                            name: "group1",
                            size: 50,
                            parameterValues: {
                              key: 1,
                            },
                          },
                          {
                            name: "gruop2",
                            size: 50,
                            parameterValues: {},
                          },
                        ],
                        allocation: 100,
                        duration: 14,
                        targetingGateID: "",
                        defaultConfidenceInterval: "95",
                        bonferroniCorrection: true,
                      },
                    },
                  },
                  properties: {
                    message: {
                      $ref: "../models/message.json",
                    },
                    data: {
                      $ref: "../models/experiment.json",
                    },
                  },
                },
                examples: {
                  "example-1": {
                    value: {
                      message: "string",
                      data: {
                        id: "a_experiment",
                        description:
                          "a helpful summary of what this experiment does",
                        lastModifierName: "CONSOLE API",
                        lastModifierID: "f0JAV9dd7KF0sUbi1DHWB",
                        idType: "userID",
                        status: "setup",
                        layerID: "layer1",
                        hypothesis: "Does 1 or 0 work better?",
                        primaryMetrics: [
                          {
                            name: "l14",
                            type: "user",
                          },
                        ],
                        primaryMetricTags: [],
                        secondaryMetrics: [
                          {
                            name: "mau_28d",
                            type: "user",
                          },
                        ],
                        secondaryMetricTags: [],
                        groups: [
                          {
                            name: "group1",
                            size: 50,
                            parameterValues: {
                              key: 1,
                            },
                          },
                          {
                            name: "gruop2",
                            size: 50,
                            parameterValues: {
                              key: 0,
                            },
                          },
                        ],
                        allocation: 50.46,
                        duration: 14,
                        targetingGateID: "a_gate",
                        defaultConfidenceInterval: "95",
                        bonferroniCorrection: false,
                        tags: [],
                      },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      status: 404,
                      message: "Experiment not found.",
                    },
                  },
                  properties: {
                    status: {
                      $ref: "../models/status.json",
                    },
                    message: {
                      $ref: "../models/message.json",
                    },
                  },
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 404,
                      message: "Experiment not found.",
                    },
                  },
                },
              },
            },
          },
        },
        description: "Update selected properties of the experiment",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                "x-examples": {
                  "example-1": {
                    id: "a_experiment",
                    description: "updated summary",
                    idType: "userID",
                    layerID: "statsig::a_layer",
                    hypothesis: "updated hypothesis",
                    primaryMetrics: [
                      {
                        id: "my_custom_metric",
                        type: "event_count_custom",
                      },
                    ],
                    secondaryMetrics: [],
                    groups: [
                      {
                        name: "group1",
                        size: 50,
                        parameterValues: {
                          key: 1,
                        },
                      },
                      {
                        name: "gruop2",
                        size: 50,
                        parameterValues: {},
                      },
                    ],
                    allocation: 100,
                    duration: 14,
                    targetingGateID: "",
                    defaultConfidenceInterval: "95",
                    bonferroniCorrection: true,
                  },
                },
                properties: {
                  id: {
                    $ref: "#/components/schemas/id",
                  },
                  description: {
                    $ref: "#/components/schemas/description",
                  },
                  idType: {
                    $ref: "#/components/schemas/idType",
                  },
                  tags: {
                    $ref: "#/components/schemas/tags",
                  },
                  hypothesis: {
                    $ref: "#/components/schemas/hypothesis",
                  },
                  primaryMetrics: {
                    type: "array",
                    items: {
                      $ref: "../models/experiment_metric.json",
                    },
                  },
                  primaryMetricTags: {
                    $ref: "#/components/schemas/metricTags",
                  },
                  secondaryMetrics: {
                    type: "array",
                    items: {
                      $ref: "../models/experiment_metric.json",
                    },
                  },
                  secondaryMetricTags: {
                    $ref: "#/components/schemas/metricTags",
                  },
                  groups: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/groups",
                    },
                  },
                  allocation: {
                    $ref: "#/components/schemas/alloation",
                  },
                  duration: {
                    $ref: "#/components/schemas/duration",
                  },
                  targetingGateID: {
                    $ref: "#/components/schemas/targetingGateID",
                  },
                  defaultConfidenceInterval: {
                    $ref: "#/components/schemas/defaultConfidenceInterval",
                  },
                  bonferroniCorrection: {
                    $ref: "#/components/schemas/bonferroniCorrection",
                  },
                  status: {
                    $ref: "../models/experiment_status.json",
                  },
                  targetApps: {
                    $ref: "../models/targetApps.json",
                  },
                },
              },
              examples: {
                "example-1": {
                  value: {
                    id: "a_experiment",
                    description: "updated summary",
                    idType: "userID",
                    status: "setup",
                    tags: ["marketing", "cost_savings"],
                    targetApps: [],
                    launchedGroupID: null,
                    startTime: null,
                    endTime: null,
                    layerID: "statsig::a_layer",
                    hypothesis: "updated hypothesis",
                    primaryMetrics: [
                      {
                        id: "my_custom_metric",
                        type: "event_count_custom",
                      },
                    ],
                    primaryMetricTags: [],
                    secondaryMetrics: [],
                    secondaryMetricTags: ["* Core"],
                    groups: [
                      {
                        name: "group1",
                        id: "4HbgLdfqlIeN3sHkyMG1qC",
                        size: 50,
                        parameterValues: {
                          key: 1,
                        },
                      },
                      {
                        name: "gruop2",
                        id: "4HbgLeUsO0ohmSfg9UBEJE",
                        size: 50,
                        parameterValues: {},
                      },
                    ],
                    allocation: 100,
                    duration: 14,
                    targetingGateID: "",
                    defaultConfidenceInterval: "95",
                    bonferroniCorrection: true,
                    decisionReason: "",
                  },
                },
              },
            },
          },
        },
        tags: ["Experiments"],
      },
    },
    "/experiments/{experiment_id}/overrides": {
      parameters: [
        {
          schema: {
            type: "string",
            example: "a_experiment",
          },
          name: "experiment_id",
          in: "path",
          required: true,
          description: "Experiment ID to query",
        },
      ],
      get: {
        summary: "Get Experiment Overrides",
        tags: ["Experiments"],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      message: "Experiment Overrides read successfully.",
                      data: {
                        overrides: [
                          {
                            groupID: "4IfTisAzh1ieQ5E1rc9kK2",
                            name: "b_gate",
                            type: "gate",
                          },
                          {
                            groupID: "4IfTiqVwOJ8KwG65Q4dHr0",
                            name: "",
                            type: "segment",
                          },
                          {
                            groupID: "4IfTiqVwOJ8KwG65Q4dHr0",
                            name: "a_gate",
                            type: "gate",
                          },
                        ],
                        userIDOverrides: [
                          {
                            ids: ["a_user", "b_user"],
                            groupID: "4IfTisAzh1ieQ5E1rc9kK2",
                          },
                          {
                            ids: ["c_user"],
                            groupID: "4IfTiqVwOJ8KwG65Q4dHr0",
                          },
                        ],
                      },
                    },
                  },
                  properties: {
                    message: {
                      $ref: "../models/message.json",
                    },
                    data: {
                      type: "object",
                      properties: {
                        overrides: {
                          type: "array",
                          items: {
                            $ref: "#/components/schemas/experiment_override",
                          },
                        },
                        userIDOverrides: {
                          type: "array",
                          items: {
                            $ref: "#/components/schemas/experiment_id_override",
                          },
                        },
                      },
                    },
                  },
                },
                examples: {
                  "example-1": {
                    value: {
                      message: "Experiment Overrides read successfully.",
                      data: {
                        overrides: [
                          {
                            groupID: "Control",
                            name: "a_gate",
                            type: "gate",
                          },
                          {
                            groupID: "test",
                            name: "a_segment",
                            type: "segment",
                          },
                        ],
                        userIDOverrides: [
                          {
                            ids: ["updated_id_list"],
                            groupID: "Control",
                          },
                          {
                            ids: ["updated_id_lists"],
                            groupID: "Test",
                          },
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            $ref: "#/components/responses/experiment_404.json",
          },
        },
        operationId: "get-experiments-experiment_id-overrides",
        description: "",
      },
      post: {
        summary: "Update Experiment Overrides",
        operationId: "post-experiments-experiment_id-overrides",
        responses: {
          201: {
            description: "Created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      message: "Experiment Overrides updated successfully.",
                      data: {
                        overrides: [
                          {
                            type: "segment",
                            name: "a_segment",
                            groupID: "Control",
                          },
                          {
                            type: "gate",
                            name: "a_gate",
                            groupID: "Test",
                          },
                        ],
                        userIDOverrides: [
                          {
                            groupID: "Control",
                            ids: ["updated_id_list"],
                          },
                          {
                            groupID: "Test",
                            ids: ["updated_id_lists"],
                          },
                        ],
                      },
                    },
                  },
                  properties: {
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                      properties: {
                        overrides: {
                          type: "array",
                          items: {
                            $ref: "#/components/schemas/experiment_override",
                          },
                        },
                        userIDOverrides: {
                          type: "array",
                          items: {
                            $ref: "#/components/schemas/experiment_id_override",
                          },
                        },
                      },
                    },
                  },
                },
                examples: {
                  "example-1": {
                    value: {
                      message: "Experiment Overrides updated successfully.",
                      data: {
                        overrides: [
                          {
                            type: "segment",
                            name: "a_segment",
                            groupID: "Control",
                          },
                          {
                            type: "gate",
                            name: "a_gate",
                            groupID: "Test",
                          },
                        ],
                        userIDOverrides: [
                          {
                            groupID: "Control",
                            ids: ["updated_user1"],
                          },
                          {
                            groupID: "Test",
                            ids: ["updated_user2"],
                          },
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            $ref: "#/components/responses/experiment_404.json",
          },
        },
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                "x-examples": {
                  "example-1": {
                    overrides: [
                      {
                        type: "segment",
                        name: "a_segment",
                        groupID: "Control",
                      },
                      {
                        type: "gate",
                        name: "a_gate",
                        groupID: "Test",
                      },
                    ],
                    userIDOverrides: [
                      {
                        groupID: "Control",
                        ids: ["updated_id_list"],
                      },
                      {
                        groupID: "Test",
                        ids: ["updated_id_lists"],
                      },
                    ],
                  },
                },
                properties: {
                  overrides: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/experiment_override",
                    },
                  },
                  userIDOverrides: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/experiment_id_override",
                    },
                  },
                },
              },
              examples: {
                "example-1": {
                  value: {
                    overrides: [
                      {
                        type: "segment",
                        id: "a_segment",
                        groupID: "Control",
                      },
                      {
                        type: "gate",
                        id: "a_gate",
                        groupID: "Test",
                      },
                    ],
                    userIDOverrides: [
                      {
                        groupID: "Control",
                        ids: ["updated_control_id_list"],
                      },
                      {
                        groupID: "Test",
                        ids: ["updated_test_id_list"],
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        tags: ["Experiments"],
        description: "",
      },
      patch: {
        summary: "Add Experiment Overrides",
        operationId: "post-experiments-experiment_id-overrides",
        responses: {
          201: {
            description: "Created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      message: "Experiment Overrides updated successfully.",
                      data: {
                        overrides: [
                          {
                            type: "segment",
                            name: "a_segment",
                            groupID: "Control",
                          },
                          {
                            type: "gate",
                            name: "a_gate",
                            groupID: "Test",
                          },
                        ],
                        userIDOverrides: [
                          {
                            groupID: "Control",
                            ids: ["updated_id_list"],
                          },
                          {
                            groupID: "Test",
                            ids: ["updated_id_lists"],
                          },
                        ],
                      },
                    },
                  },
                  properties: {
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                      properties: {
                        overrides: {
                          type: "array",
                          items: {
                            $ref: "#/components/schemas/experiment_override",
                          },
                        },
                        userIDOverrides: {
                          type: "array",
                          items: {
                            $ref: "#/components/schemas/experiment_id_override",
                          },
                        },
                      },
                    },
                  },
                },
                examples: {
                  "Adding overrides": {
                    value: {
                      message: "Experiment Overrides updated successfully.",
                      data: {
                        overrides: [
                          {
                            type: "segment",
                            name: "a_segment",
                            groupID: "Control",
                          },
                          {
                            type: "gate",
                            id: "a_gate",
                            groupID: "Test",
                          },
                        ],
                        userIDOverrides: [
                          {
                            groupID: "Control",
                            ids: ["newly_added_id"],
                          },
                          {
                            groupID: "Test",
                            ids: ["id_that_already_existed"],
                          },
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            $ref: "#/components/responses/experiment_404.json",
          },
        },
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                "x-examples": {
                  "example-1": {
                    overrides: [
                      {
                        type: "segment",
                        name: "a_segment",
                        groupID: "Control",
                      },
                      {
                        type: "gate",
                        name: "a_gate",
                        groupID: "Test",
                      },
                    ],
                    userIDOverrides: [
                      {
                        groupID: "Control",
                        ids: ["updated_id_list"],
                      },
                      {
                        groupID: "Test",
                        ids: ["updated_id_lists"],
                      },
                    ],
                  },
                },
                properties: {
                  overrides: {
                    type: "array",
                    description: "experiment overrides to be added",
                    items: {
                      $ref: "#/components/schemas/experiment_override",
                    },
                  },
                  userIDOverrides: {
                    type: "array",
                    description: "list of ids to add from each selected group",
                    items: {
                      $ref: "#/components/schemas/experiment_id_override",
                    },
                  },
                },
              },
              examples: {
                "Adding overrides": {
                  value: {
                    overrides: [
                      {
                        type: "gate",
                        id: "a_gate",
                        groupID: "Test",
                      },
                    ],
                    userIDOverrides: [
                      {
                        groupID: "Control",
                        ids: ["newly_added_id"],
                      },
                    ],
                  },
                },
              },
            },
          },
          description:
            "This endpoint will add overrides to the existing list of overrides.",
        },
        tags: ["Experiments"],
        description: "",
      },
      delete: {
        summary: "Remove Experiment Overrides",
        operationId: "post-experiments-experiment_id-overrides",
        responses: {
          201: {
            description: "Created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      message: "Experiment Overrides updated successfully.",
                      data: {
                        overrides: [
                          {
                            type: "segment",
                            name: "a_segment",
                            groupID: "Control",
                          },
                          {
                            type: "gate",
                            name: "a_gate",
                            groupID: "Test",
                          },
                        ],
                        userIDOverrides: [
                          {
                            groupID: "Control",
                            ids: ["updated_id_list"],
                          },
                          {
                            groupID: "Test",
                            ids: ["updated_id_lists"],
                          },
                        ],
                      },
                    },
                  },
                  properties: {
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                      properties: {
                        overrides: {
                          type: "array",
                          items: {
                            $ref: "#/components/schemas/experiment_override",
                          },
                        },
                        userIDOverrides: {
                          type: "array",
                          items: {
                            $ref: "#/components/schemas/experiment_id_override",
                          },
                        },
                      },
                    },
                  },
                },
                examples: {
                  "example-1": {
                    value: {
                      message: "Experiment Overrides updated successfully.",
                      data: {
                        overrides: [
                          {
                            type: "segment",
                            name: "a_segment",
                            groupID: "Control",
                          },
                        ],
                        userIDOverrides: [
                          {
                            groupID: "Control",
                            ids: ["unaffected_id1", "unaffected_id2"],
                          },
                          {
                            groupID: "Test",
                            ids: ["id1", "id2"],
                          },
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            $ref: "#/components/responses/experiment_404.json",
          },
        },
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                "x-examples": {
                  "example-1": {
                    overrides: [
                      {
                        type: "segment",
                        name: "a_segment",
                        groupID: "Control",
                      },
                      {
                        type: "gate",
                        name: "a_gate",
                        groupID: "Test",
                      },
                    ],
                    userIDOverrides: [
                      {
                        groupID: "Control",
                        ids: ["updated_id_list"],
                      },
                      {
                        groupID: "Test",
                        ids: ["updated_id_lists"],
                      },
                    ],
                  },
                },
                properties: {
                  overrides: {
                    type: "array",
                    description: "experiment overrides to be removed",
                    items: {
                      $ref: "#/components/schemas/experiment_override",
                    },
                  },
                  userIDOverrides: {
                    type: "array",
                    description:
                      "list of ids to be removed from each selected group",
                    items: {
                      $ref: "#/components/schemas/experiment_id_override",
                    },
                  },
                },
              },
              examples: {
                "Removing overrides": {
                  value: {
                    overrides: [
                      {
                        type: "gate",
                        id: "a_gate",
                        groupID: "Test",
                      },
                    ],
                    userIDOverrides: [
                      {
                        groupID: "Control",
                        ids: ["remove_just_this_id"],
                      },
                    ],
                  },
                },
              },
            },
          },
          description:
            "This endpoint will remove selected overrides while leaving the rest unaffected.",
        },
        tags: ["Experiments"],
        description: "",
      },
    },
    "/experiments/{experiment_id}/start": {
      parameters: [
        {
          schema: {
            type: "string",
          },
          name: "experiment_id",
          in: "path",
          required: true,
        },
      ],
      put: {
        summary: "Start Experiment",
        operationId: "put-experiments-experiment_id-start",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      message: "Experiment successfully started.",
                    },
                  },
                  properties: {
                    message: {
                      $ref: "../models/message.json",
                    },
                  },
                },
                examples: {
                  Success: {
                    value: {
                      message: "Experiment successfully started.",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                    },
                    message: {
                      type: "string",
                    },
                  },
                  "x-examples": {
                    "example-1": {
                      status: 400,
                      message: "Experiment has finished",
                    },
                  },
                },
                examples: {
                  "Experiment already started": {
                    value: {
                      status: 400,
                      message: "Experiment has already started",
                    },
                  },
                  "Experiment already finished": {
                    value: {
                      status: 400,
                      message: "Experiment has already finished",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            $ref: "#/components/responses/experiment_404.json",
          },
        },
        tags: ["Experiments"],
      },
    },
    "/experiments/{experiment_id}/make_decision": {
      parameters: [
        {
          schema: {
            type: "string",
          },
          name: "experiment_id",
          in: "path",
          required: true,
        },
      ],
      put: {
        summary: "Finish Experiment Early",
        operationId: "put-experiments-experiment_id-start",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      message: "Experiment successfully started.",
                    },
                  },
                  properties: {
                    message: {
                      $ref: "../models/message.json",
                    },
                  },
                },
                examples: {
                  Success: {
                    value: {
                      message: "Decision made for Experiment.",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      status: 400,
                      message: "Experiment has finished",
                    },
                  },
                  properties: {
                    status: {
                      $ref: "../models/status.json",
                    },
                    message: {
                      $ref: "../models/message.json",
                    },
                  },
                },
                examples: {
                  "Experiment has not yet started": {
                    value: {
                      status: 400,
                      message: "Experiment has not yet started",
                    },
                  },
                  "Experiment already finished": {
                    value: {
                      status: 400,
                      message: "Experiment has already finished",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            $ref: "#/components/responses/experiment_404.json",
          },
        },
        tags: ["Experiments"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                "x-examples": {
                  "example-1": {
                    groupID: "red",
                    decisionReason: "A valid reason to stop early",
                    removeTargeting: true,
                  },
                },
                properties: {
                  groupID: {
                    type: "string",
                    description: "The groupID to be selected as the winner",
                  },
                  decisionReason: {
                    type: "string",
                    description: "Reason for stopping the experiment early",
                  },
                  removeTargeting: {
                    type: "boolean",
                    description: "Whether targetting gate should be removed",
                  },
                },
              },
              examples: {
                "example-1": {
                  value: {
                    groupID: "red",
                    decisionReason: "Your reason for stopping early",
                    removeTargeting: false,
                  },
                },
              },
            },
          },
        },
      },
    },
    "/experiments/{experiment_id}/reset": {
      parameters: [
        {
          schema: {
            type: "string",
          },
          name: "experiment_id",
          in: "path",
          required: true,
        },
      ],
      put: {
        summary: "Reset Experiment",
        operationId: "put-experiments-experiment_id-start",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      message: "Experiment successfully started.",
                    },
                  },
                  properties: {
                    message: {
                      $ref: "../models/message.json",
                    },
                  },
                },
                examples: {
                  Success: {
                    value: {
                      message: "Experiment successfully restarted.",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                    },
                    message: {
                      type: "string",
                    },
                  },
                  "x-examples": {
                    "example-1": {
                      status: 400,
                      message: "Experiment has finished",
                    },
                  },
                },
                examples: {
                  "Experiment has not yet started": {
                    value: {
                      status: 400,
                      message: "Experiment has not yet started",
                    },
                  },
                  "Experiment has not yet finished": {
                    value: {
                      status: 400,
                      message: "Experiment has not yet finished",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            $ref: "#/components/responses/experiment_404.json",
          },
        },
        tags: ["Experiments"],
        "x-stoplight": {
          id: "j7v1w5s60ynya",
        },
        description: "",
      },
    },
    "/experiments/{experiment_id}/abandon": {
      parameters: [
        {
          schema: {
            type: "string",
          },
          name: "experiment_id",
          in: "path",
          required: true,
        },
      ],
      put: {
        summary: "Abandon Experiment",
        operationId: "put-experiments-experiment_id-start",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      message: "Experiment successfully started.",
                    },
                  },
                  properties: {
                    message: {
                      $ref: "../models/message.json",
                    },
                  },
                },
                examples: {
                  Success: {
                    value: {
                      message: "Experiment successfully abandoned.",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                    },
                    message: {
                      type: "string",
                    },
                  },
                  "x-examples": {
                    "example-1": {
                      status: 400,
                      message: "Experiment has finished",
                    },
                  },
                },
                examples: {
                  "Experiment not started": {
                    value: {
                      status: 400,
                      message: "Experiment has not yet started",
                    },
                  },
                  "Experiment already abandoned": {
                    value: {
                      status: 400,
                      message: "Experiment a_experiment is already abandoned",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            $ref: "#/components/responses/experiment_404.json",
          },
        },
        tags: ["Experiments"],
        "x-stoplight": {
          id: "woa738678jk09",
        },
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                "x-examples": {
                  "Example 1": {
                    removeTargeting: false,
                    decisionReason: "",
                  },
                },
                properties: {
                  removeTargeting: {
                    type: "boolean",
                    description: "Removing targeting on experiment",
                  },
                  decisionReason: {
                    type: "string",
                    description: "Why the experiment was abandoned",
                  },
                },
              },
              examples: {
                Example: {
                  value: {
                    removeTargeting: false,
                    decisionReason: "Reason for abandoning the experiment",
                  },
                },
              },
            },
          },
        },
      },
    },
    "/experiments/{experiment_id}/load_pulse": {
      parameters: [
        {
          schema: {
            type: "string",
          },
          name: "experiment_id",
          in: "path",
          required: true,
        },
      ],
      post: {
        summary: "Load Pulse",
        operationId: "post-experiments-experiment_id-load-pulse",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "example-1": {
                      message: "Experiment is loading.",
                    },
                  },
                  properties: {
                    message: {
                      $ref: "../models/message.json",
                    },
                  },
                },
                examples: {
                  Success: {
                    value: {
                      message: "Experiment is loading",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "integer",
                    },
                    message: {
                      type: "string",
                    },
                  },
                  "x-examples": {
                    "example-1": {
                      status: 400,
                      message: "Experiment has finished",
                    },
                  },
                },
                examples: {
                  "Experiment not started": {
                    value: {
                      status: 400,
                      message: "Experiment has not yet started",
                    },
                  },
                  "Experiment already abandoned": {
                    value: {
                      status: 400,
                      message: "Experiment a_experiment has finished",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            $ref: "#/components/responses/experiment_404.json",
          },
        },
        tags: ["Experiments"],
        "x-stoplight": {
          id: "woa738678jk09",
        },
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                "x-examples": {
                  "Example 1": {
                    refresh: "full",
                  },
                },
                properties: {
                  refresh: {
                    type: "string",
                    description: "Refresh type ('full' or 'incremental')",
                  },
                },
              },
              examples: {
                Example: {
                  value: {
                    type: "full",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
