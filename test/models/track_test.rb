# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  genre       :string
#  duration    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#
require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
