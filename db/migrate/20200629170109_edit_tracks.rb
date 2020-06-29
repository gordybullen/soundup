class EditTracks < ActiveRecord::Migration[5.2]
  def change
    change_column_null :tracks, :description, true
  end
end
