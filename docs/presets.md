# Presets

A preset is a named set of rule entries, each with its severity and its properties. A project enables a preset instead of listing every rule.

The rules that require `max` have no built-in default value, so a preset that enables them carries the values.

A preset is fixed and takes no parameters. A project changes a rule of the preset by writing an entry for that rule after the preset. The entries are combined in this way.

- An entry with only a severity changes the severity and keeps the properties of the preset.
- An entry with an object replaces the properties of the preset as a whole. A property left out is not inherited.

A project enables presets by naming them in `extends`. The `rules` entry of the project is applied after them. In the example below, the first entry only lowers the severity of a rule, and the second replaces the limit of another. As in every rule example, an object carries its `severity`.

```json
{
  "extends": ["recommended"],
  "rules": {
    "flow/fault-path-required": "warn",
    "custom-object/max-fields-per-object": {
      "severity": "error",
      "max": 800
    }
  }
}
```

## recommended

The `recommended` preset enables the rules that fail at deploy, expose data or break a platform limit, and that rarely report a false positive. Rules about style and maintainability are not part of it, nor are the rules that need a value only the project knows, such as a naming pattern.

The `max` values of the platform limits are the official limits, with the source in the **Reference** line of each rule.

## Rules in recommended

### Deploy and correctness

- [`approval-process/boolean-filter-valid`](/rules/approval-process/#approval-process-boolean-filter-valid)
- [`assignment-rules/boolean-filter-valid`](/rules/assignment-rules/#assignment-rules-boolean-filter-valid)
- [`assignment-rules/one-active-rule-per-object`](/rules/assignment-rules/#assignment-rules-one-active-rule-per-object)
- [`auto-response-rules/boolean-filter-valid`](/rules/auto-response-rules/#auto-response-rules-boolean-filter-valid)
- [`auto-response-rules/one-active-rule-per-object`](/rules/auto-response-rules/#auto-response-rules-one-active-rule-per-object)
- [`business-process/values-exist`](/rules/business-process/#business-process-values-exist)
- [`certificate/not-expired`](/rules/certificate/#certificate-not-expired)
- [`custom-application/default-landing-tab-in-tabs`](/rules/custom-application/#custom-application-default-landing-tab-in-tabs)
- [`custom-application/profile-action-override-scoped`](/rules/custom-application/#custom-application-profile-action-override-scoped)
- [`custom-field/no-history-on-formula-field`](/rules/custom-field/#custom-field-no-history-on-formula-field)
- [`custom-field/single-default-picklist-value`](/rules/custom-field/#custom-field-single-default-picklist-value)
- [`custom-object/deployment-status-deployed`](/rules/custom-object/#custom-object-deployment-status-deployed)
- [`custom-object/feed-history-tracking-requires-feeds-enabled`](/rules/custom-object/#custom-object-feed-history-tracking-requires-feeds-enabled)
- [`custom-object/history-tracking-requires-object-enabled`](/rules/custom-object/#custom-object-history-tracking-requires-object-enabled)
- [`custom-tab/no-hardcoded-url`](/rules/custom-tab/#custom-tab-no-hardcoded-url)
- [`duplicate-rule/boolean-filter-valid`](/rules/duplicate-rule/#duplicate-rule-boolean-filter-valid)
- [`entitlement-process/single-default-version`](/rules/entitlement-process/#entitlement-process-single-default-version)
- [`escalation-rules/boolean-filter-valid`](/rules/escalation-rules/#escalation-rules-boolean-filter-valid)
- [`escalation-rules/one-active-rule-per-object`](/rules/escalation-rules/#escalation-rules-one-active-rule-per-object)
- [`external-service-registration/status-complete`](/rules/external-service-registration/#external-service-registration-status-complete)
- [`flexi-page/field-behavior-conflict`](/rules/flexi-page/#flexi-page-field-behavior-conflict)
- [`flexi-page/no-hardcoded-id`](/rules/flexi-page/#flexi-page-no-hardcoded-id)
- [`flow/fault-path-required`](/rules/flow/#flow-fault-path-required)
- [`flow/no-dml-in-loop`](/rules/flow/#flow-no-dml-in-loop)
- [`flow/no-hardcoded-id`](/rules/flow/#flow-no-hardcoded-id)
- [`flow/no-query-in-loop`](/rules/flow/#flow-no-query-in-loop)
- [`layout/feed-layout-requires-feed-tracking`](/rules/layout/#layout-feed-layout-requires-feed-tracking)
- [`layout/no-duplicate-field-in-layout`](/rules/layout/#layout-no-duplicate-field-in-layout)
- [`layout/required-field-editable-on-layout`](/rules/layout/#layout-required-field-editable-on-layout)
- [`list-view/boolean-filter-valid`](/rules/list-view/#list-view-boolean-filter-valid)
- [`list-view/no-hardcoded-id`](/rules/list-view/#list-view-no-hardcoded-id)
- [`lwc/target-config-consistent`](/rules/lwc/#lwc-target-config-consistent)
- [`matching-rule/boolean-filter-valid`](/rules/matching-rule/#matching-rule-boolean-filter-valid)
- [`project/forceignore-forward-slash-only`](/rules/project-structure-rules/#project-forceignore-forward-slash-only)
- [`project/no-duplicate-metadata`](/rules/project-structure-rules/#project-no-duplicate-metadata)
- [`quick-action/no-hardcoded-id`](/rules/quick-action/#quick-action-no-hardcoded-id)
- [`quick-action/no-required-readonly-conflict-in-action`](/rules/quick-action/#quick-action-no-required-readonly-conflict-in-action)
- [`record-type/business-process-required-for-process-objects`](/rules/record-type/#record-type-business-process-required-for-process-objects)
- [`record-type/picklist-value-exists`](/rules/record-type/#record-type-picklist-value-exists)
- [`report/no-hardcoded-id`](/rules/report/#report-no-hardcoded-id)
- [`role/no-circular-parent`](/rules/role/#role-no-circular-parent)
- [`routing-configuration/capacity-single-model`](/rules/routing-configuration/#routing-configuration-capacity-single-model)
- [`sharing-rules/boolean-filter-valid`](/rules/sharing-rules/#sharing-rules-boolean-filter-valid)
- [`validation-rule/error-display-field-exists`](/rules/validation-rule/#validation-rule-error-display-field-exists)
- [`workflow/boolean-filter-valid`](/rules/workflow/#workflow-boolean-filter-valid)

### Security

- [`apex-page/csrf-token-recommended`](/rules/apex-page/#apex-page-csrf-token-recommended)
- [`auth-provider/credentials-in-header`](/rules/auth-provider/#auth-provider-credentials-in-header)
- [`auth-provider/no-secret-in-apis`](/rules/auth-provider/#auth-provider-no-secret-in-apis)
- [`auth-provider/no-secret-in-metadata`](/rules/auth-provider/#auth-provider-no-secret-in-metadata)
- [`certificate/no-private-key-material`](/rules/certificate/#certificate-no-private-key-material)
- [`certificate/private-key-not-exportable`](/rules/certificate/#certificate-private-key-not-exportable)
- [`connected-app/https-required`](/rules/connected-app/#connected-app-https-required)
- [`connected-app/no-secret-in-metadata`](/rules/connected-app/#connected-app-no-secret-in-metadata)
- [`custom-object/external-sharing-model-not-wider`](/rules/custom-object/#custom-object-external-sharing-model-not-wider)
- [`custom-object/no-permissive-sharing-model`](/rules/custom-object/#custom-object-no-permissive-sharing-model)
- [`custom-object/sharing-model-explicit`](/rules/custom-object/#custom-object-sharing-model-explicit)
- [`custom-site/browser-protections-required`](/rules/custom-site/#custom-site-browser-protections-required)
- [`custom-site/clickjack-protection`](/rules/custom-site/#custom-site-clickjack-protection)
- [`custom-site/no-standard-pages-for-guest`](/rules/custom-site/#custom-site-no-standard-pages-for-guest)
- [`custom-tab/https-required`](/rules/custom-tab/#custom-tab-https-required)
- [`duplicate-rule/no-bypass-sharing-in-duplicate-rule`](/rules/duplicate-rule/#duplicate-rule-no-bypass-sharing-in-duplicate-rule)
- [`email-services-function/authentication-required`](/rules/email-services-function/#email-services-function-authentication-required)
- [`email-services-function/authorized-senders-required`](/rules/email-services-function/#email-services-function-authorized-senders-required)
- [`experience-bundle/no-public-route`](/rules/experience-bundle/#experience-bundle-no-public-route)
- [`experience-bundle/no-public-site`](/rules/experience-bundle/#experience-bundle-no-public-site)
- [`external-service-registration/no-secret-in-metadata`](/rules/external-service-registration/#external-service-registration-no-secret-in-metadata)
- [`flow/no-system-mode-without-sharing`](/rules/flow/#flow-no-system-mode-without-sharing)
- [`folder/no-public-access`](/rules/folder/#folder-no-public-access)
- [`folder/no-share-with-all-users`](/rules/folder/#folder-no-share-with-all-users)
- [`iframe-white-list-url-settings/allowlist-no-wildcard-domain`](/rules/iframe-white-list-url-settings/#iframe-white-list-url-settings-allowlist-no-wildcard-domain)
- [`iframe-white-list-url-settings/https-required`](/rules/iframe-white-list-url-settings/#iframe-white-list-url-settings-https-required)
- [`list-view/no-everything-visible-listview`](/rules/list-view/#list-view-no-everything-visible-listview)
- [`lwc/no-relaxed-csp-capability`](/rules/lwc/#lwc-no-relaxed-csp-capability)
- [`network/no-guest-chatter`](/rules/network/#network-no-guest-chatter)
- [`network/no-guest-file-access`](/rules/network/#network-no-guest-file-access)
- [`network/no-guest-member-visibility`](/rules/network/#network-no-guest-member-visibility)
- [`network/self-registration-profile-explicit`](/rules/network/#network-self-registration-profile-explicit)
- [`permission-set/no-dangerous-permission`](/rules/permission-set/#permission-set-no-dangerous-permission)
- [`saml-sso-config/https-required`](/rules/saml-sso-config/#saml-sso-config-https-required)
- [`saml-sso-config/not-expired`](/rules/saml-sso-config/#saml-sso-config-not-expired)
- [`saml-sso-config/sha256-required`](/rules/saml-sso-config/#saml-sso-config-sha256-required)
- [`settings/knowledge-public-sharing-allowlist`](/rules/settings/#settings-knowledge-public-sharing-allowlist)
- [`settings/no-admin-login-as-any-user`](/rules/settings/#settings-no-admin-login-as-any-user)
- [`sharing-rules/no-guest-sharing-rule`](/rules/sharing-rules/#sharing-rules-no-guest-sharing-rule)
- [`sharing-rules/no-share-with-all-users`](/rules/sharing-rules/#sharing-rules-no-share-with-all-users)
- [`static-resource/no-public-cache`](/rules/static-resource/#static-resource-no-public-cache)
- [`workflow/no-session-id-in-outbound-message`](/rules/workflow/#workflow-no-session-id-in-outbound-message)

### Platform limits

- [`custom-field/formula-max-length`](/rules/custom-field/#custom-field-formula-max-length)
- [`custom-field/max-help-text-length`](/rules/custom-field/#custom-field-max-help-text-length)
- [`custom-object/history-tracking-limit`](/rules/custom-object/#custom-object-history-tracking-limit)
- [`custom-object/max-fields-per-object`](/rules/custom-object/#custom-object-max-fields-per-object)
- [`custom-object/max-master-detail-per-object`](/rules/custom-object/#custom-object-max-master-detail-per-object)
- [`custom-object/max-object-relationships`](/rules/custom-object/#custom-object-max-object-relationships)
- [`custom-object/max-rollup-summary-fields-per-object`](/rules/custom-object/#custom-object-max-rollup-summary-fields-per-object)
- [`project/description-max-length`](/rules/project-structure-rules/#project-description-max-length)
- [`project/max-api-name-length`](/rules/project-structure-rules/#project-max-api-name-length)
- [`project/max-files`](/rules/project-structure-rules/#project-max-files)
- [`project/max-size`](/rules/project-structure-rules/#project-max-size)
- [`sharing-rules/max-criteria-sharing-rules-per-object`](/rules/sharing-rules/#sharing-rules-max-criteria-sharing-rules-per-object)
- [`sharing-rules/max-sharing-rules-per-object`](/rules/sharing-rules/#sharing-rules-max-sharing-rules-per-object)
- [`validation-rule/error-message-max-length`](/rules/validation-rule/#validation-rule-error-message-max-length)
- [`validation-rule/max-validation-rules-per-object`](/rules/validation-rule/#validation-rule-max-validation-rules-per-object)
