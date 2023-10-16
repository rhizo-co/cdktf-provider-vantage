// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CostReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter query to apply to the Cost Report
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#filter CostReport#filter}
  */
  readonly filter?: string;
  /**
  * Token of the folder this report resides in.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#folder_token CostReport#folder_token}
  */
  readonly folderToken?: string;
  /**
  * Saved filter tokens to be applied to the report.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#saved_filter_tokens CostReport#saved_filter_tokens}
  */
  readonly savedFilterTokens?: string[];
  /**
  * Title of the Cost Report
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#title CostReport#title}
  */
  readonly title: string;
  /**
  * Workspace token to add the cost report to.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report#workspace_token CostReport#workspace_token}
  */
  readonly workspaceToken?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report vantage_cost_report}
*/
export class CostReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_cost_report";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/cost_report vantage_cost_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CostReportConfig
  */
  public constructor(scope: Construct, id: string, config: CostReportConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_cost_report',
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
    this._filter = config.filter;
    this._folderToken = config.folderToken;
    this._savedFilterTokens = config.savedFilterTokens;
    this._title = config.title;
    this._workspaceToken = config.workspaceToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // folder_token - computed: true, optional: true, required: false
  private _folderToken?: string; 
  public get folderToken() {
    return this.getStringAttribute('folder_token');
  }
  public set folderToken(value: string) {
    this._folderToken = value;
  }
  public resetFolderToken() {
    this._folderToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderTokenInput() {
    return this._folderToken;
  }

  // saved_filter_tokens - computed: true, optional: true, required: false
  private _savedFilterTokens?: string[]; 
  public get savedFilterTokens() {
    return this.getListAttribute('saved_filter_tokens');
  }
  public set savedFilterTokens(value: string[]) {
    this._savedFilterTokens = value;
  }
  public resetSavedFilterTokens() {
    this._savedFilterTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedFilterTokensInput() {
    return this._savedFilterTokens;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // workspace_token - computed: true, optional: true, required: false
  private _workspaceToken?: string; 
  public get workspaceToken() {
    return this.getStringAttribute('workspace_token');
  }
  public set workspaceToken(value: string) {
    this._workspaceToken = value;
  }
  public resetWorkspaceToken() {
    this._workspaceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceTokenInput() {
    return this._workspaceToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      folder_token: cdktf.stringToTerraform(this._folderToken),
      saved_filter_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(this._savedFilterTokens),
      title: cdktf.stringToTerraform(this._title),
      workspace_token: cdktf.stringToTerraform(this._workspaceToken),
    };
  }
}
