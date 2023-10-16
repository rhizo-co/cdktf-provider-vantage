# `vantage_dashboard`

Refer to the Terraform Registory for docs: [`vantage_dashboard`](https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard).

# `dashboard` Submodule <a name="`dashboard` Submodule" id="rhizo-co-terraform-provider-vantage.dashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Dashboard <a name="Dashboard" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard"></a>

Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard vantage_dashboard}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vantage;

new Dashboard(Construct Scope, string Id, DashboardConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig">DashboardConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig">DashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.resetDateBin">ResetDateBin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.resetDateInterval">ResetDateInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.resetWorkspaceToken">ResetWorkspaceToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDateBin` <a name="ResetDateBin" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.resetDateBin"></a>

```csharp
private void ResetDateBin()
```

##### `ResetDateInterval` <a name="ResetDateInterval" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.resetDateInterval"></a>

```csharp
private void ResetDateInterval()
```

##### `ResetEndDate` <a name="ResetEndDate" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetStartDate` <a name="ResetStartDate" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.resetStartDate"></a>

```csharp
private void ResetStartDate()
```

##### `ResetWorkspaceToken` <a name="ResetWorkspaceToken" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.resetWorkspaceToken"></a>

```csharp
private void ResetWorkspaceToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vantage;

Dashboard.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vantage;

Dashboard.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vantage;

Dashboard.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.dateBinInput">DateBinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.dateIntervalInput">DateIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.widgetTokensInput">WidgetTokensInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.workspaceTokenInput">WorkspaceTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.dateBin">DateBin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.dateInterval">DateInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.widgetTokens">WidgetTokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.workspaceToken">WorkspaceToken</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Token`<sup>Required</sup> <a name="Token" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `DateBinInput`<sup>Optional</sup> <a name="DateBinInput" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.dateBinInput"></a>

```csharp
public string DateBinInput { get; }
```

- *Type:* string

---

##### `DateIntervalInput`<sup>Optional</sup> <a name="DateIntervalInput" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.dateIntervalInput"></a>

```csharp
public string DateIntervalInput { get; }
```

- *Type:* string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidgetTokensInput`<sup>Optional</sup> <a name="WidgetTokensInput" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.widgetTokensInput"></a>

```csharp
public string[] WidgetTokensInput { get; }
```

- *Type:* string[]

---

##### `WorkspaceTokenInput`<sup>Optional</sup> <a name="WorkspaceTokenInput" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.workspaceTokenInput"></a>

```csharp
public string WorkspaceTokenInput { get; }
```

- *Type:* string

---

##### `DateBin`<sup>Required</sup> <a name="DateBin" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.dateBin"></a>

```csharp
public string DateBin { get; }
```

- *Type:* string

---

##### `DateInterval`<sup>Required</sup> <a name="DateInterval" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.dateInterval"></a>

```csharp
public string DateInterval { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `WidgetTokens`<sup>Required</sup> <a name="WidgetTokens" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.widgetTokens"></a>

```csharp
public string[] WidgetTokens { get; }
```

- *Type:* string[]

---

##### `WorkspaceToken`<sup>Required</sup> <a name="WorkspaceToken" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.workspaceToken"></a>

```csharp
public string WorkspaceToken { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-vantage.dashboard.Dashboard.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DashboardConfig <a name="DashboardConfig" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vantage;

new DashboardConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Title,
    string[] WidgetTokens,
    string DateBin = null,
    string DateInterval = null,
    string EndDate = null,
    string StartDate = null,
    string WorkspaceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.title">Title</a></code> | <code>string</code> | Title of the dashboard. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.widgetTokens">WidgetTokens</a></code> | <code>string[]</code> | Tokens for widgets present in the dashboard. Currently only cost report tokens are supported. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.dateBin">DateBin</a></code> | <code>string</code> | Determines how to group costs in the Dashboard. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.dateInterval">DateInterval</a></code> | <code>string</code> | Determines the date range in the Dashboard. Guaranteed to be set to 'custom' if 'start_date' and 'end_date' are set. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.endDate">EndDate</a></code> | <code>string</code> | The end date for the date range for CostReports in the Dashboard. ISO 8601 Formatted. Overwrites 'date_interval' if set. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.startDate">StartDate</a></code> | <code>string</code> | The start date for the date range for CostReports in the Dashboard. ISO 8601 Formatted. Overwrites 'date_interval' if set. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.workspaceToken">WorkspaceToken</a></code> | <code>string</code> | The token for the Workspace the Dashboard is a part of. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#title Dashboard#title}

---

##### `WidgetTokens`<sup>Required</sup> <a name="WidgetTokens" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.widgetTokens"></a>

```csharp
public string[] WidgetTokens { get; set; }
```

- *Type:* string[]

Tokens for widgets present in the dashboard. Currently only cost report tokens are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#widget_tokens Dashboard#widget_tokens}

---

##### `DateBin`<sup>Optional</sup> <a name="DateBin" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.dateBin"></a>

```csharp
public string DateBin { get; set; }
```

- *Type:* string

Determines how to group costs in the Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#date_bin Dashboard#date_bin}

---

##### `DateInterval`<sup>Optional</sup> <a name="DateInterval" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.dateInterval"></a>

```csharp
public string DateInterval { get; set; }
```

- *Type:* string

Determines the date range in the Dashboard. Guaranteed to be set to 'custom' if 'start_date' and 'end_date' are set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#date_interval Dashboard#date_interval}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

The end date for the date range for CostReports in the Dashboard. ISO 8601 Formatted. Overwrites 'date_interval' if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#end_date Dashboard#end_date}

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

The start date for the date range for CostReports in the Dashboard. ISO 8601 Formatted. Overwrites 'date_interval' if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#start_date Dashboard#start_date}

---

##### `WorkspaceToken`<sup>Optional</sup> <a name="WorkspaceToken" id="rhizo-co-terraform-provider-vantage.dashboard.DashboardConfig.property.workspaceToken"></a>

```csharp
public string WorkspaceToken { get; set; }
```

- *Type:* string

The token for the Workspace the Dashboard is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#workspace_token Dashboard#workspace_token}

---



