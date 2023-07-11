module.exports = {
  docs: [
    "getting-started",
    {
      type: "category",
      label: "Walkthrough Guides",
      link: {
        type: "generated-index",
        title: "Walkthrough Guides",
      },
      items: [
        "guides/first-feature",
        "guides/logging-events",
        "guides/first-dynamic-config",
        "guides/abn-tests",
        "guides/first-device-level-experiment",
        "guides/experiment-on-custom-id-types",
        "guides/first-holdout",
        "guides/using-environments",
        "guides/setting-up-reviews",
        "guides/first-segment",
        "guides/private-attributes",
        "guides/synchronized-launch",
        "guides/first-shopify-abtest",
        "guides/use-statsig-for-analytics-only",
        "guides/featuregates-or-experiments",
        "guides/experimentation-program",
        "guides/aa-test",
        "guides/serverless",
        "guides/config-history",
        "guides/production",
        "guides/testing",
        "guides/uptime",
        "guides/landing-page-experiments",
        "guides/sendgrid-email-abtest",
        "guides/customer-io-email-abtest",
        "guides/email-campaign-test",
        "guides/cms-integrations",
        "guides/experiment-analysis",
        "guides/migrate-from-launchdarkly",
      ],
    },
    {
      type: "category",
      label: "Feature Gates",
      link: {
        type: "doc",
        id: "feature-gates/working-with",
      },
      items: [
        "feature-gates/create-new",
        "feature-gates/add-rule",
        "feature-gates/test-gate",
        "feature-gates/overrides",
        "feature-gates/scheduled-rollouts",
        {
          Implement: [
            "feature-gates/implement",
            "feature-gates/implement/client",
            "feature-gates/implement/server",
            "feature-gates/implement/http-api",
          ],
        },
        "feature-gates/conditions",
        "feature-gates/view-exposures",
        "feature-gates/feature-gates-lifecycle",
        "feature-gates/permanent-and-stale-gates",
        "feature-gates/best-practices",
      ],
    },
    {
      type: "category",
      label: "Dynamic Config",
      link: {
        type: "doc",
        id: "dynamic-config/introduction",
      },
      items: [
        "dynamic-config/working-with",
        "dynamic-config/create-new",
        "dynamic-config/add-rule",
        "dynamic-config/implement",
      ],
    },
    {
      type: "category",
      label: "Segments",
      link: {
        type: "doc",
        id: "segments/introduction",
      },
      items: [
        "segments/create-new",
        "segments/add-rule",
        "segments/add-id-list",
        "segments/use-segment",
      ],
    },
    {
      type: "category",
      label: "Layers",
      link: {
        type: "doc",
        id: "layers/introduction",
      },
      items: ["layers/js-tutorial"],
    },
    {
      type: "category",
      label: "Experiments",
      link: {
        type: "doc",
        id: "experiments-plus/introduction",
      },
      items: [
        "experiments-plus/working-with",
        "experiments-plus/create-new",
        "experiments-plus/power-analysis",
        "experiments-plus/implement",
        "experiments-plus/rules",
        "experiments-plus/getting-group",
        "experiments-plus/monitor",
        "experiments-plus/read-results",
        "experiments-plus/sequential-testing",
        "experiments-plus/make-decision",
        "experiments-plus/overrides",
        "experiments-plus/stratified-sampling",
        "experiments-plus/abandon",
        "experiments-plus/ending-experiment",
        "experiments-plus/disable-group",
        {
          Experimentation: [
            "experiments-plus/experimentation/why-experiment",
            "experiments-plus/experimentation/scenarios",
            "experiments-plus/experimentation/best-practices",
            "experiments-plus/experimentation/common-terms",
            "experiments-plus/experimentation/choosing-randomization-unit",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Autotune",
      link: {
        type: "doc",
        id: "autotune/introduction",
      },
      items: ["autotune/setup", "autotune/monitoring"],
    },
    {
      type: "category",
      label: "Metrics",
      link: {
        type: "doc",
        id: "metrics/introduction",
      },
      items: [
        {
          "Metrics 101 - Overview": [
            "metrics/101",
            "metrics/how-metrics-work",
            "metrics/raw-events",
            "metrics/raw-event-metrics",
            "metrics/custom-metrics",
            "metrics/precomputed-metrics",
            "metrics/user-dimensions",
            "metrics/metric-dimensions",
          ],
        },
        // other
        "metrics/ingest",
        "metrics/pulse",
        "metrics/console",
        "metrics/health-checks",

        // 201
        "metrics/create",
        "metrics/archiving-metrics",
        "metrics/create-metric-tags",
        "metrics/metric-alerts",
        "metrics/user",

        // 301
        "metrics/create-user-flows",
        "metrics/create-user-funnels",
        "metrics/events-explorer",
      ],
    },
    {
      type: "category",
      label: "Pulse",
      link: {
        type: "doc",
        id: "pulse/introduction",
      },
      items: [
        "pulse/read-pulse",
        "pulse/drill-down",
        "pulse/custom-queries",
        "pulse/export",
        "pulse/best-practices",
        "pulse/faq",
      ],
    },
    {
      type: "doc",
      label: "Users",
      id: "users/introduction",
    },
    {
      type: "doc",
      label: "Events Explorer",
      id: "events-explorer/introduction",
    },
    {
      type: "doc",
      label: "Holdouts",
      id: "holdouts/introduction",
    },
    {
      type: "doc",
      label: "Insights",
      id: "insights/introduction",
    },
    {
      type: "category",
      label: "Client SDKs",
      link: {
        type: "doc",
        id: "client/introduction",
      },
      items: [
        {
          Concepts: [
            "client/concepts/user",
            "client/concepts/initialize",
            "sdks/debugging",
          ],
        },
        "client/jsClientSDK",
        "client/reactSDK",
        "client/reactNativeSDK",
        "client/reactNativeExpoSDK",
        "client/iosClientSDK",
        "client/androidClientSDK",
        "client/dotnetSDK",
        "client/rokuSDK",
        "client/unitySDK",
        "client/dartSDK",
      ],
    },
    {
      type: "category",
      label: "Server SDKs",
      link: {
        type: "doc",
        id: "server/introduction",
      },
      items: [
        {
          Concepts: [
            "server/concepts/user",
            "messages/serverRequiredUserID",
            "server/concepts/data_store",
            "sdks/debugging",
          ],
        },
        "server/nodejsServerSDK",
        "server/javaSdk",
        "server/pythonSDK",
        "server/golangSDK",
        "server/rubySDK",
        "server/dotnetSDK",
        "server/phpSDK",
        "server/erlangSDK",
        "server/rustSDK",
      ],
    },
    "http-api",
    {
      type: "category",
      label: "Console API",
      link: {
        type: "doc",
        id: "console-api/introduction",
      },
      items: [
        "console-api/gates",
        "console-api/segments",
        "console-api/dynamic-configs",
        "console-api/experiments",
        "console-api/holdouts",
        "console-api/layers",
        "console-api/users",
        "console-api/metrics",
        "console-api/audit-logs",
        "console-api/autotunes",
        {
          Reports: [
            "console-api/daily-reports",
            "console-api/daily-reports-deprecated",
          ],
        },
        "console-api/all-endpoints",
        "console-api/usage-billing",
        "console-api/rules",
      ],
    },
    {
      type: "category",
      label: "Access Management",
      link: {
        type: "doc",
        id: "access-management/introduction",
      },
      items: [
        "access-management/projects",
        "access-management/organizations",
        {
          "Single Sign-On": [
            "access-management/sso/overview",
            "access-management/sso/okta_sso",
            "access-management/sso/azuread",
            "access-management/sso/google",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Statsig Warehouse Native",
      link: {
        type: "doc",
        id: "statsig-warehouse-native/introduction",
      },
      items: [
        "statsig-warehouse-native/getting-started",
        "statsig-warehouse-native/pipeline-overview",
        {
          "Building Blocks": [
            "statsig-warehouse-native/building-blocks/assignment-sources",
            "statsig-warehouse-native/building-blocks/metric-sources",
            "statsig-warehouse-native/building-blocks/metrics",
          ],
        },
        {
          "Connecting Your Warehouse": [
            "statsig-warehouse-native/connecting-your-warehouse/bigquery",
            "statsig-warehouse-native/connecting-your-warehouse/snowflake",
            "statsig-warehouse-native/connecting-your-warehouse/databricks",
            "statsig-warehouse-native/connecting-your-warehouse/redshift",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Data Warehouse Ingestion",
      link: {
        type: "doc",
        id: "data-warehouse-ingestion/introduction",
      },
      items: [
        {
          "Connection Set Up": [
            "data-warehouse-ingestion/bigquery",
            "data-warehouse-ingestion/redshift",
            "data-warehouse-ingestion/snowflake",
            "data-warehouse-ingestion/databricks",
            "data-warehouse-ingestion/synapse",
            "data-warehouse-ingestion/s3",
            "data-warehouse-ingestion/athena",
            "data-warehouse-ingestion/faq",
          ],
        },
        "data-warehouse-ingestion/data_mapping",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      link: {
        type: "doc",
        id: "integrations/introduction",
      },
      items: [
        {
          "Data Connectors": [
            "integrations/data-connectors/census",
            "integrations/data-connectors/fivetran",
            "integrations/data-connectors/heap",
            "integrations/data-connectors/hightouch",
            "integrations/data-connectors/mparticle",
            "integrations/data-connectors/revenuecat",
            "integrations/data-connectors/segment",
            "integrations/data-connectors/rudderstack",
            "integrations/data-connectors/stitch",
            "integrations/data-connectors/mixpanel",
            "integrations/data-connectors/amplitude",
          ],
        },
        {
          "Data Imports (Deprecated)": [
            "integrations/data-imports/overview-deprecated",
            "integrations/data-imports/bigquery-deprecated",
            "integrations/data-imports/redshift-deprecated",
            "integrations/data-imports/snowflake-deprecated",
            "integrations/data-imports/azure_upload-deprecated",
          ],
        },
        {
          "Data Exports": ["integrations/data-exports/overview"],
        },
        "integrations/event_filtering",
        "integrations/event_webhook",
        "integrations/jira",
        "integrations/vercel",
        "integrations/cloudflare",
        "integrations/fastly",
        "integrations/vscode",
        "integrations/datadog",
        {
          type: "category",
          label: "Terraform",
          link: {
            type: "doc",
            id: "integrations/terraform/introduction",
          },
          items: [
            "integrations/terraform/terraform_gate",
            "integrations/terraform/terraform_experiment",
          ],
        },
        {
          type: "category",
          label: "Triggers",
          link: {
            type: "doc",
            id: "integrations/triggers/introduction",
          },
          items: ["integrations/triggers/datadog"],
        },
      ],
    },
    {
      type: "category",
      label: "Stats Engine",
      link: {
        type: "doc",
        id: "stats-engine/introduction",
      },
      items: [
        "stats-engine/metric-deltas",
        "stats-engine/variance",
        "stats-engine/confidence-intervals",
        "stats-engine/p-value",
        "stats-engine/topline-impact",
        "stats-engine/variance-reduction",
        "stats-engine/offlineaa",
        "stats-engine/pre-experiment-bias",
        {
          "Methodologies Used": [
            "stats-engine/methodologies/bonferroni-correction",
            "stats-engine/methodologies/cuped",
            "stats-engine/methodologies/delta-method",
            "stats-engine/methodologies/srm-checks",
            "stats-engine/methodologies/winsorization",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Compliance",
      link: {
        type: "doc",
        id: "compliance/introduction",
      },
      items: ["compliance/user_data_deletion_requests"],
    },
    "custom_proxy",
    "reliability-faq",
    "faq",
  ],
};
