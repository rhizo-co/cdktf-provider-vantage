# `vantage_cost_report`

Refer to the Terraform Registory for docs: [`vantage_cost_report`](https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report).

# `costReport` Submodule <a name="`costReport` Submodule" id="rhizo-co-terraform-provider-vantage.costReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostReport <a name="CostReport" id="rhizo-co-terraform-provider-vantage.costReport.CostReport"></a>

Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report vantage_cost_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer"></a>

```python
from rhizo-co_cdktf_provider_vantage import cost_report

costReport.CostReport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  title: str,
  filter: str = None,
  folder_token: str = None,
  saved_filter_tokens: typing.List[str] = None,
  workspace_token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.title">title</a></code> | <code>str</code> | Title of the Cost Report. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Filter query to apply to the Cost Report. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.folderToken">folder_token</a></code> | <code>str</code> | Token of the folder this report resides in. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.savedFilterTokens">saved_filter_tokens</a></code> | <code>typing.List[str]</code> | Saved filter tokens to be applied to the report. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.workspaceToken">workspace_token</a></code> | <code>str</code> | Workspace token to add the cost report to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.title"></a>

- *Type:* str

Title of the Cost Report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#title CostReport#title}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.filter"></a>

- *Type:* str

Filter query to apply to the Cost Report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#filter CostReport#filter}

---

##### `folder_token`<sup>Optional</sup> <a name="folder_token" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.folderToken"></a>

- *Type:* str

Token of the folder this report resides in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#folder_token CostReport#folder_token}

---

##### `saved_filter_tokens`<sup>Optional</sup> <a name="saved_filter_tokens" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.savedFilterTokens"></a>

- *Type:* typing.List[str]

Saved filter tokens to be applied to the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#saved_filter_tokens CostReport#saved_filter_tokens}

---

##### `workspace_token`<sup>Optional</sup> <a name="workspace_token" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.Initializer.parameter.workspaceToken"></a>

- *Type:* str

Workspace token to add the cost report to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#workspace_token CostReport#workspace_token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.resetFolderToken">reset_folder_token</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.resetSavedFilterTokens">reset_saved_filter_tokens</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.resetWorkspaceToken">reset_workspace_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_folder_token` <a name="reset_folder_token" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.resetFolderToken"></a>

```python
def reset_folder_token() -> None
```

##### `reset_saved_filter_tokens` <a name="reset_saved_filter_tokens" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.resetSavedFilterTokens"></a>

```python
def reset_saved_filter_tokens() -> None
```

##### `reset_workspace_token` <a name="reset_workspace_token" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.resetWorkspaceToken"></a>

```python
def reset_workspace_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_vantage import cost_report

costReport.CostReport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_vantage import cost_report

costReport.CostReport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_vantage import cost_report

costReport.CostReport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.folderTokenInput">folder_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.savedFilterTokensInput">saved_filter_tokens_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.workspaceTokenInput">workspace_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.folderToken">folder_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.savedFilterTokens">saved_filter_tokens</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.workspaceToken">workspace_token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `token`<sup>Required</sup> <a name="token" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `folder_token_input`<sup>Optional</sup> <a name="folder_token_input" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.folderTokenInput"></a>

```python
folder_token_input: str
```

- *Type:* str

---

##### `saved_filter_tokens_input`<sup>Optional</sup> <a name="saved_filter_tokens_input" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.savedFilterTokensInput"></a>

```python
saved_filter_tokens_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `workspace_token_input`<sup>Optional</sup> <a name="workspace_token_input" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.workspaceTokenInput"></a>

```python
workspace_token_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `folder_token`<sup>Required</sup> <a name="folder_token" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.folderToken"></a>

```python
folder_token: str
```

- *Type:* str

---

##### `saved_filter_tokens`<sup>Required</sup> <a name="saved_filter_tokens" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.savedFilterTokens"></a>

```python
saved_filter_tokens: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `workspace_token`<sup>Required</sup> <a name="workspace_token" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.workspaceToken"></a>

```python
workspace_token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-vantage.costReport.CostReport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CostReportConfig <a name="CostReportConfig" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_vantage import cost_report

costReport.CostReportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  title: str,
  filter: str = None,
  folder_token: str = None,
  saved_filter_tokens: typing.List[str] = None,
  workspace_token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.title">title</a></code> | <code>str</code> | Title of the Cost Report. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.filter">filter</a></code> | <code>str</code> | Filter query to apply to the Cost Report. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.folderToken">folder_token</a></code> | <code>str</code> | Token of the folder this report resides in. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.savedFilterTokens">saved_filter_tokens</a></code> | <code>typing.List[str]</code> | Saved filter tokens to be applied to the report. |
| <code><a href="#rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.workspaceToken">workspace_token</a></code> | <code>str</code> | Workspace token to add the cost report to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Title of the Cost Report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#title CostReport#title}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Filter query to apply to the Cost Report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#filter CostReport#filter}

---

##### `folder_token`<sup>Optional</sup> <a name="folder_token" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.folderToken"></a>

```python
folder_token: str
```

- *Type:* str

Token of the folder this report resides in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#folder_token CostReport#folder_token}

---

##### `saved_filter_tokens`<sup>Optional</sup> <a name="saved_filter_tokens" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.savedFilterTokens"></a>

```python
saved_filter_tokens: typing.List[str]
```

- *Type:* typing.List[str]

Saved filter tokens to be applied to the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#saved_filter_tokens CostReport#saved_filter_tokens}

---

##### `workspace_token`<sup>Optional</sup> <a name="workspace_token" id="rhizo-co-terraform-provider-vantage.costReport.CostReportConfig.property.workspaceToken"></a>

```python
workspace_token: str
```

- *Type:* str

Workspace token to add the cost report to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#workspace_token CostReport#workspace_token}

---



