/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Robot blocks for Blockly.
 * @author jstn@cs.washington.edu (Justin Huang)
 */
'use strict';

goog.provide('Blockly.Blocks.robot');

goog.require('Blockly.Blocks');

Blockly.Blocks['robot_display_message_h1h2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("display message");
    this.appendValueInput("h1Text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("big text");
    this.appendValueInput("h2Text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("regular text");
    this.appendValueInput("timeout")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("timeout (s)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip('Display a message with both big and regular size text.');
    this.setHelpUrl('');
  }
};