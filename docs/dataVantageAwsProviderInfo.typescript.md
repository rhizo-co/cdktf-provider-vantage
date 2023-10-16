# `data_vantage_aws_provider_info`

Refer to the Terraform Registory for docs: [`data_vantage_aws_provider_info`](https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/data-sources/aws_provider_info).

# `dataVantageAwsProviderInfo` Submodule <a name="`dataVantageAwsProviderInfo` Submodule" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVantageAwsProviderInfo <a name="DataVantageAwsProviderInfo" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo"></a>

Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/data-sources/aws_provider_info vantage_aws_provider_info}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer"></a>

```typescript
import { dataVantageAwsProviderInfo } from 'rhizo-co-terraform-provider-vantage'

new dataVantageAwsProviderInfo.DataVantageAwsProviderInfo(scope: Construct, id: string, config?: DataVantageAwsProviderInfoConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig">DataVantageAwsProviderInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig">DataVantageAwsProviderInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isConstruct"></a>

```typescript
import { dataVantageAwsProviderInfo } from 'rhizo-co-terraform-provider-vantage'

dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformElement"></a>

```typescript
import { dataVantageAwsProviderInfo } from 'rhizo-co-terraform-provider-vantage'

dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformDataSource"></a>

```typescript
import { dataVantageAwsProviderInfo } from 'rhizo-co-terraform-provider-vantage'

dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.additionalResourcesPolicy">additionalResourcesPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.autopilotPolicy">autopilotPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cloudwatchMetricsPolicy">cloudwatchMetricsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.rootPolicy">rootPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `additionalResourcesPolicy`<sup>Required</sup> <a name="additionalResourcesPolicy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.additionalResourcesPolicy"></a>

```typescript
public readonly additionalResourcesPolicy: string;
```

- *Type:* string

---

##### `autopilotPolicy`<sup>Required</sup> <a name="autopilotPolicy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.autopilotPolicy"></a>

```typescript
public readonly autopilotPolicy: string;
```

- *Type:* string

---

##### `cloudwatchMetricsPolicy`<sup>Required</sup> <a name="cloudwatchMetricsPolicy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.cloudwatchMetricsPolicy"></a>

```typescript
public readonly cloudwatchMetricsPolicy: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `rootPolicy`<sup>Required</sup> <a name="rootPolicy" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.rootPolicy"></a>

```typescript
public readonly rootPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfo.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVantageAwsProviderInfoConfig <a name="DataVantageAwsProviderInfoConfig" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.Initializer"></a>

```typescript
import { dataVantageAwsProviderInfo } from 'rhizo-co-terraform-provider-vantage'

const dataVantageAwsProviderInfoConfig: dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-vantage.dataVantageAwsProviderInfo.DataVantageAwsProviderInfoConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---



