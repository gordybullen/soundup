# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  description :text
#  duration    :integer          not null
#  genre       :string
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#
# Indexes
#
#  index_tracks_on_title    (title)
#  index_tracks_on_user_id  (user_id)
#
require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
