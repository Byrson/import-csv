import React from "react";
import TargetFieldSelect from "./TargetFieldSelect";
import {Label} from "@buffetjs/core";
import {IMPORT_STATE, MATCH_ON_KEY} from "../../utils/constants";

const MappingOptions = ({stat, onChange, targetModel, importState}) => {
  return importState === IMPORT_STATE.content ? (
      <div>
        {stat.format === "xml" && (
          <div>
            <Label htmlFor={"stripCheckbox"} message={"Strip Tags"}/>
            <input
              name={"stripCheckbox"}
              type="checkbox"
              onChange={e => onChange({stripTags: e.target.checked})}
            />
          </div>
        )}

        {stat.hasMediaUrls && (
          <div>
            <Label htmlFor={"mediaTargetSelect"} message={"Import as Media"} />
            <input
              name={"mediaTargetSelect"}
              type="checkbox"
              onChange={e => onChange({ importMediaToField: e.target.checked })}
            />
          </div>
        )}
      </div>
    ) :
    <div>
      <Label htmlFor={"MatchOnIDRadio"} message={"Match on"}/>
      <input
        name={"MatchOnIDRadio"}
        type="radio"
        onChange={e => onChange({[MATCH_ON_KEY]: e.target.checked})}
      />
    </div>

};

export default MappingOptions;
