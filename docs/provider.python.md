# `provider`

Refer to the Terraform Registory for docs: [`vantage`](https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs).

# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-vantage.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VantageProvider <a name="VantageProvider" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider"></a>

Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs vantage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.Initializer"></a>

```python
from rhizo-co_cdktf_provider_vantage import provider

provider.VantageProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  api_token: str = None,
  host: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.Initializer.parameter.apiToken">api_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs#api_token VantageProvider#api_token}. |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.Initializer.parameter.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs#host VantageProvider#host}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs#alias VantageProvider#alias}

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.Initializer.parameter.apiToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs#api_token VantageProvider#api_token}.

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.Initializer.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs#host VantageProvider#host}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.resetApiToken">reset_api_token</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.resetHost">reset_host</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_api_token` <a name="reset_api_token" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.resetApiToken"></a>

```python
def reset_api_token() -> None
```

##### `reset_host` <a name="reset_host" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.resetHost"></a>

```python
def reset_host() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_vantage import provider

provider.VantageProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_vantage import provider

provider.VantageProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.isTerraformProvider"></a>

```python
from rhizo-co_cdktf_provider_vantage import provider

provider.VantageProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.apiTokenInput">api_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.apiToken">api_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.host">host</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `api_token_input`<sup>Optional</sup> <a name="api_token_input" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.apiTokenInput"></a>

```python
api_token_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.host"></a>

```python
host: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-vantage.provider.VantageProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VantageProviderConfig <a name="VantageProviderConfig" id="rhizo-co-terraform-provider-vantage.provider.VantageProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-vantage.provider.VantageProviderConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_vantage import provider

provider.VantageProviderConfig(
  alias: str = None,
  api_token: str = None,
  host: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProviderConfig.property.apiToken">api_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs#api_token VantageProvider#api_token}. |
| <code><a href="#rhizo-co-terraform-provider-vantage.provider.VantageProviderConfig.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs#host VantageProvider#host}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-vantage.provider.VantageProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs#alias VantageProvider#alias}

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="rhizo-co-terraform-provider-vantage.provider.VantageProviderConfig.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs#api_token VantageProvider#api_token}.

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-vantage.provider.VantageProviderConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs#host VantageProvider#host}.

---



