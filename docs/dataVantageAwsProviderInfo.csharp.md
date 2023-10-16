# `data_vantage_aws_provider_info`

Refer to the Terraform Registory for docs: [`data_vantage_aws_provider_info`](https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/data-sources/aws_provider_info).

# `dataVantageAwsProviderInfo` Submodule <a name="`dataVantageAwsProviderInfo` Submodule" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVantageAwsProviderInfo <a name="DataVantageAwsProviderInfo" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo"></a>

Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/data-sources/aws_provider_info vantage_aws_provider_info}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vantage;

new DataVantageAwsProviderInfo(Construct Scope, string Id, DataVantageAwsProviderInfoConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig">DataVantageAwsProviderInfoConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vantage;

DataVantageAwsProviderInfo.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vantage;

DataVantageAwsProviderInfo.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vantage;

DataVantageAwsProviderInfo.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.additionalResourcesPolicy">AdditionalResourcesPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.autopilotPolicy">AutopilotPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cloudwatchMetricsPolicy">CloudwatchMetricsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.rootPolicy">RootPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AdditionalResourcesPolicy`<sup>Required</sup> <a name="AdditionalResourcesPolicy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.additionalResourcesPolicy"></a>

```csharp
public string AdditionalResourcesPolicy { get; }
```

- *Type:* string

---

##### `AutopilotPolicy`<sup>Required</sup> <a name="AutopilotPolicy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.autopilotPolicy"></a>

```csharp
public string AutopilotPolicy { get; }
```

- *Type:* string

---

##### `CloudwatchMetricsPolicy`<sup>Required</sup> <a name="CloudwatchMetricsPolicy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cloudwatchMetricsPolicy"></a>

```csharp
public string CloudwatchMetricsPolicy { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `RootPolicy`<sup>Required</sup> <a name="RootPolicy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.rootPolicy"></a>

```csharp
public string RootPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVantageAwsProviderInfoConfig <a name="DataVantageAwsProviderInfoConfig" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vantage;

new DataVantageAwsProviderInfoConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---



