/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<49fda0ecf66da2490d556755a9ffdbaf>>
 */

mod docblock;

use docblock::transform_fixture;
use fixture_tests::test_fixture;

#[tokio::test]
async fn multiple_modules() {
    let input = include_str!("docblock/fixtures/multiple-modules.input");
    let expected = include_str!("docblock/fixtures/multiple-modules.expected");
    test_fixture(transform_fixture, file!(), "multiple-modules.input", "docblock/fixtures/multiple-modules.expected", input, expected).await;
}

#[tokio::test]
async fn plural_optional() {
    let input = include_str!("docblock/fixtures/plural-optional.input");
    let expected = include_str!("docblock/fixtures/plural-optional.expected");
    test_fixture(transform_fixture, file!(), "plural-optional.input", "docblock/fixtures/plural-optional.expected", input, expected).await;
}

#[tokio::test]
async fn single_module() {
    let input = include_str!("docblock/fixtures/single-module.input");
    let expected = include_str!("docblock/fixtures/single-module.expected");
    test_fixture(transform_fixture, file!(), "single-module.input", "docblock/fixtures/single-module.expected", input, expected).await;
}
