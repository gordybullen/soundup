# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  genre       :string
#  duration    :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Track < ApplicationRecord
  validates :user_id, :title, :duration, presence: true

  validate :ensure_audio_file
  validate :ensure_image_file
  
  has_one_attached :audio_file
  has_one_attached :image_file

  def ensure_audio_file
    unless self.audio_file.attached?
      errors[:audio_file] << "Must be attached"
    end
  end

  def ensure_image_file
    unless self.image_file.attached?
      errors[:image_file] << "Must be attached"
    end
  end
end
