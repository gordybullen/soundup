# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :text             not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  parent_comment_id :integer          not null
#  track_id          :integer          not null
#  user_id           :integer          not null
#
# Indexes
#
#  index_comments_on_parent_comment_id  (parent_comment_id)
#  index_comments_on_track_id           (track_id)
#  index_comments_on_user_id            (user_id)
#
class Comment < ApplicationRecord
  validates :body, :parent_comment_id, :track_id, :user_id, presence: true

  belongs_to :commenter,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :track,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Track

  belongs_to :parent_comment,
    primary_key: :id,
    foreign_key: :parent_comment_id,
    class_name: :Comment

  has_one :child_comment,
    primary_key: :id,
    foreign_key: :parent_comment_id,
    class_name: :Comment
end
