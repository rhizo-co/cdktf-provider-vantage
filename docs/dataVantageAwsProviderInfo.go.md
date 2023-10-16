# `data_vantage_aws_provider_info`

Refer to the Terraform Registory for docs: [`data_vantage_aws_provider_info`](https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/data-sources/aws_provider_info).

# `dataVantageAwsProviderInfo` Submodule <a name="`dataVantageAwsProviderInfo` Submodule" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVantageAwsProviderInfo <a name="DataVantageAwsProviderInfo" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo"></a>

Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/data-sources/aws_provider_info vantage_aws_provider_info}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-vantage-go/vantage/datavantageawsproviderinfo"

datavantageawsproviderinfo.NewDataVantageAwsProviderInfo(scope Construct, id *string, config DataVantageAwsProviderInfoConfig) DataVantageAwsProviderInfo
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig">DataVantageAwsProviderInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig">DataVantageAwsProviderInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-vantage-go/vantage/datavantageawsproviderinfo"

datavantageawsproviderinfo.DataVantageAwsProviderInfo_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-vantage-go/vantage/datavantageawsproviderinfo"

datavantageawsproviderinfo.DataVantageAwsProviderInfo_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-vantage-go/vantage/datavantageawsproviderinfo"

datavantageawsproviderinfo.DataVantageAwsProviderInfo_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.additionalResourcesPolicy">AdditionalResourcesPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.autopilotPolicy">AutopilotPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cloudwatchMetricsPolicy">CloudwatchMetricsPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.rootPolicy">RootPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdditionalResourcesPolicy`<sup>Required</sup> <a name="AdditionalResourcesPolicy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.additionalResourcesPolicy"></a>

```go
func AdditionalResourcesPolicy() *string
```

- *Type:* *string

---

##### `AutopilotPolicy`<sup>Required</sup> <a name="AutopilotPolicy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.autopilotPolicy"></a>

```go
func AutopilotPolicy() *string
```

- *Type:* *string

---

##### `CloudwatchMetricsPolicy`<sup>Required</sup> <a name="CloudwatchMetricsPolicy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cloudwatchMetricsPolicy"></a>

```go
func CloudwatchMetricsPolicy() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `RootPolicy`<sup>Required</sup> <a name="RootPolicy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.rootPolicy"></a>

```go
func RootPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVantageAwsProviderInfoConfig <a name="DataVantageAwsProviderInfoConfig" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-vantage-go/vantage/datavantageawsproviderinfo"

&datavantageawsproviderinfo.DataVantageAwsProviderInfoConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---



