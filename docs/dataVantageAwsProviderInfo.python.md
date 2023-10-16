# `data_vantage_aws_provider_info`

Refer to the Terraform Registory for docs: [`data_vantage_aws_provider_info`](https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/data-sources/aws_provider_info).

# `dataVantageAwsProviderInfo` Submodule <a name="`dataVantageAwsProviderInfo` Submodule" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVantageAwsProviderInfo <a name="DataVantageAwsProviderInfo" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo"></a>

Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/data-sources/aws_provider_info vantage_aws_provider_info}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_vantage import data_vantage_aws_provider_info

dataVantageAwsProviderInfo.DataVantageAwsProviderInfo(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_vantage import data_vantage_aws_provider_info

dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_vantage import data_vantage_aws_provider_info

dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_vantage import data_vantage_aws_provider_info

dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.additionalResourcesPolicy">additional_resources_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.autopilotPolicy">autopilot_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cloudwatchMetricsPolicy">cloudwatch_metrics_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.rootPolicy">root_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `additional_resources_policy`<sup>Required</sup> <a name="additional_resources_policy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.additionalResourcesPolicy"></a>

```python
additional_resources_policy: str
```

- *Type:* str

---

##### `autopilot_policy`<sup>Required</sup> <a name="autopilot_policy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.autopilotPolicy"></a>

```python
autopilot_policy: str
```

- *Type:* str

---

##### `cloudwatch_metrics_policy`<sup>Required</sup> <a name="cloudwatch_metrics_policy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cloudwatchMetricsPolicy"></a>

```python
cloudwatch_metrics_policy: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `root_policy`<sup>Required</sup> <a name="root_policy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.rootPolicy"></a>

```python
root_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVantageAwsProviderInfoConfig <a name="DataVantageAwsProviderInfoConfig" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_vantage import data_vantage_aws_provider_info

dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---



