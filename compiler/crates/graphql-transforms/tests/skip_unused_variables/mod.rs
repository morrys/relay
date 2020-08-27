/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use fixture_tests::Fixture;
use graphql_test_helpers::apply_transform_for_test;
use graphql_transforms::skip_unused_variables;

pub fn transform_fixture(fixture: &Fixture) -> Result<String, String> {
    apply_transform_for_test(fixture, |program| Ok(skip_unused_variables(program)))
}
