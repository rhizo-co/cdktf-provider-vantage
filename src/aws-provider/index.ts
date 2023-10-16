// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/aws_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bucket ARN for where CUR data is being stored.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/aws_provider#bucket_arn AwsProvider#bucket_arn}
  */
  readonly bucketArn?: string;
  /**
  * ARN to use for cross account access.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/aws_provider#cross_account_arn AwsProvider#cross_account_arn}
  */
  readonly crossAccountArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/aws_provider vantage_aws_provider}
*/
export class AwsProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_aws_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/aws_provider vantage_aws_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AwsProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_aws_provider',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.4',
        providerVersionConstraint: '~> 0.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketArn = config.bucketArn;
    this._crossAccountArn = config.crossAccountArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_arn - computed: false, optional: true, required: false
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  public resetBucketArn() {
    this._bucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // cross_account_arn - computed: false, optional: false, required: true
  private _crossAccountArn?: string; 
  public get crossAccountArn() {
    return this.getStringAttribute('cross_account_arn');
  }
  public set crossAccountArn(value: string) {
    this._crossAccountArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountArnInput() {
    return this._crossAccountArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_arn: cdktf.stringToTerraform(this._bucketArn),
      cross_account_arn: cdktf.stringToTerraform(this._crossAccountArn),
    };
  }
}
